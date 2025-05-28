import { useState, useEffect, useRef } from 'react';
import {
    Box,
    Paper,
    Typography,
    TextField,
    Chip,
    Stack
} from '@mui/material';

// Import game data
import { WORD_DATA } from '../constants';

/**
 * WordTypingGame - Game where users type vocabulary words by theme
 * 
 * @param {Object} props - Component properties
 * @param {boolean} props.isActive - Whether the game is currently active
 * @param {string} props.difficulty - Current difficulty level (easy, medium, hard)
 * @param {Function} props.updateStats - Callback to update game stats
 * @param {Function} props.endGame - Callback to end the game
 * @param {Object} props.gameData - Game configuration data
 */
const WordTypingGame = ({ isActive, difficulty, updateStats, endGame, gameData }) => {
    const [currentWord, setCurrentWord] = useState('');
    const [nextWord, setNextWord] = useState('');
    const [input, setInput] = useState('');
    const [score, setScore] = useState(0);
    const [wordsTyped, setWordsTyped] = useState(0);
    const [correctWords, setCorrectWords] = useState(0);
    const [incorrectWords, setIncorrectWords] = useState(0);
    const [remainingTime, setRemainingTime] = useState(gameData.timeLimit);
    const [currentTheme, setCurrentTheme] = useState('');
    const [wordPool, setWordPool] = useState([]);

    const inputRef = useRef(null);
    const timerRef = useRef(null);
    const startTimeRef = useRef(null);
    const audioCorrectRef = useRef(null);
    const audioWrongRef = useRef(null);

    // Initialize game
    useEffect(() => {
        if (isActive) {
            // Pick a random theme for the current difficulty
            const themes = gameData.themes[difficulty];
            const theme = themes[Math.floor(Math.random() * themes.length)];
            setCurrentTheme(theme);

            // Get word pool for the selected theme and difficulty
            if (WORD_DATA[theme] && WORD_DATA[theme][difficulty]) {
                const words = [...WORD_DATA[theme][difficulty]];
                shuffleArray(words); // Randomize word order
                setWordPool(words);

                // Set first and next word
                if (words.length >= 2) {
                    setCurrentWord(words[0]);
                    setNextWord(words[1]);
                }
            }

            // Focus input field
            if (inputRef.current) {
                inputRef.current.focus();
            }

            // Start timer
            startTimeRef.current = Date.now();
            timerRef.current = setInterval(() => {
                setRemainingTime(prev => {
                    if (prev <= 1) {
                        // Time's up, end the game
                        clearInterval(timerRef.current);
                        handleGameEnd();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [isActive, difficulty, gameData]);

    // Clean up on unmount
    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    // Function to shuffle array (Fisher-Yates algorithm)
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    // Handle input change
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    // Handle key press
    const handleKeyDown = (e) => {
        // Space or Enter submits the current word
        if ((e.key === ' ' || e.key === 'Enter') && input.trim()) {
            e.preventDefault();
            checkWord();
        }
    };

    // Check if typed word matches the current word
    const checkWord = () => {
        const typedWord = input.trim();
        const isCorrect = typedWord.toLowerCase() === currentWord.toLowerCase();

        // Update stats
        setWordsTyped(prev => prev + 1);

        if (isCorrect) {
            // Word typed correctly
            setCorrectWords(prev => prev + 1);

            // Calculate points based on word length and difficulty
            const basePoints = 10;
            const lengthBonus = Math.floor(currentWord.length / 3);
            const difficultyMultiplier =
                difficulty === 'easy' ? 1 :
                    difficulty === 'medium' ? 1.5 : 2;

            const points = Math.floor((basePoints + lengthBonus) * difficultyMultiplier);

            setScore(prev => prev + points);

            // Play correct sound
            if (audioCorrectRef.current) {
                audioCorrectRef.current.play();
            }
        } else {
            // Word typed incorrectly
            setIncorrectWords(prev => prev + 1);

            // Play wrong sound
            if (audioWrongRef.current) {
                audioWrongRef.current.play();
            }
        }

        // Get next word
        const wordIndex = wordPool.indexOf(nextWord) + 1;
        if (wordIndex < wordPool.length) {
            setCurrentWord(nextWord);
            setNextWord(wordPool[wordIndex]);
        } else {
            // Ran out of words, reshuffle and start again
            const shuffledWords = [...wordPool];
            shuffleArray(shuffledWords);
            setWordPool(shuffledWords);
            setCurrentWord(nextWord);
            setNextWord(shuffledWords[0]);
        }

        // Clear input
        setInput('');

        // Calculate and update stats
        const elapsedTime = (Date.now() - startTimeRef.current) / 1000;
        const wpm = Math.round((correctWords + 1) / (elapsedTime / 60));
        const accuracy = Math.round(((correctWords + 1) / (wordsTyped + 1)) * 100);

        updateStats({
            score: score + (isCorrect ? 10 : 0),
            wpm,
            accuracy
        });
    };

    // End the game and report results
    const handleGameEnd = () => {
        const elapsedTime = (Date.now() - startTimeRef.current) / 1000;
        const wpm = Math.round(correctWords / (elapsedTime / 60));
        const accuracy = Math.round((correctWords / wordsTyped) * 100 || 0);

        updateStats({
            score,
            wpm,
            accuracy
        });

        endGame();
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Theme display */}
            <Box sx={{ mb: 3, textAlign: 'center' }}>
                <Typography variant="h6">
                    Theme: <span style={{ color: '#3f51b5', fontWeight: 'bold' }}>{currentTheme.toUpperCase()}</span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Time remaining: {Math.floor(remainingTime / 60)}:{(remainingTime % 60).toString().padStart(2, '0')}
                </Typography>
            </Box>

            {/* Current word display */}
            <Paper
                elevation={3}
                sx={{
                    p: 3,
                    mb: 3,
                    width: '100%',
                    textAlign: 'center',
                    backgroundColor: 'rgba(63, 81, 181, 0.05)',
                    borderRadius: 2
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        letterSpacing: 1.5,
                        color: 'primary.main'
                    }}
                >
                    {currentWord}
                </Typography>
            </Paper>

            {/* Next word preview */}
            <Box sx={{ mb: 3, textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                    Next word:
                </Typography>
                <Typography variant="subtitle1">
                    {nextWord}
                </Typography>
            </Box>

            {/* Input field */}
            <TextField
                inputRef={inputRef}
                fullWidth
                variant="outlined"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Type the word above and press Space/Enter"
                disabled={!isActive}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                sx={{ mb: 3 }}
            />

            {/* Stats */}
            <Stack direction="row" spacing={2} justifyContent="center">
                <Chip
                    label={`Correct: ${correctWords}`}
                    color="success"
                    variant="outlined"
                />
                <Chip
                    label={`Incorrect: ${incorrectWords}`}
                    color="error"
                    variant="outlined"
                />
                <Chip
                    label={`Total: ${wordsTyped}`}
                    color="primary"
                    variant="outlined"
                />
            </Stack>

            {/* Hidden audio elements */}
            <audio ref={audioCorrectRef} src="/sounds/correct.mp3" />
            <audio ref={audioWrongRef} src="/sounds/wrong.mp3" />
        </Box>
    );
};

export default WordTypingGame;
