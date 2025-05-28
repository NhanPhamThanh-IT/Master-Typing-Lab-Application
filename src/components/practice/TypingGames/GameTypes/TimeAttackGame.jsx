import { useState, useEffect, useRef } from 'react';
import {
    Box,
    Paper,
    Typography,
    TextField,
    LinearProgress,
    Chip
} from '@mui/material';

// Import game data
import { SENTENCE_DATA } from '../constants';

/**
 * TimeAttackGame - Game where users type sentences against a timer
 * 
 * @param {Object} props - Component properties
 * @param {boolean} props.isActive - Whether the game is currently active
 * @param {string} props.difficulty - Current difficulty level (easy, medium, hard)
 * @param {Function} props.updateStats - Callback to update game stats
 * @param {Function} props.endGame - Callback to end the game
 * @param {Object} props.gameData - Game configuration data
 */
const TimeAttackGame = ({ isActive, difficulty, updateStats, endGame, gameData }) => {
    const [currentSentence, setCurrentSentence] = useState('');
    const [input, setInput] = useState('');
    const [score, setScore] = useState(0);
    const [sentencesTyped, setSentencesTyped] = useState(0);
    const [correctSentences, setCorrectSentences] = useState(0);
    const [errorCount, setErrorCount] = useState(0);
    const [time, setTime] = useState(gameData.initialTime[difficulty]);
    const [combo, setCombo] = useState(0);
    const [sentences, setSentences] = useState([]);
    const [usedSentences, setUsedSentences] = useState([]);

    const inputRef = useRef(null);
    const timerRef = useRef(null);
    const startTimeRef = useRef(null);

    // Set up the game when it becomes active
    useEffect(() => {
        if (isActive) {
            // Get sentences for selected difficulty
            const sentencesArray = SENTENCE_DATA[difficulty] || [];
            setSentences([...sentencesArray]);

            // Set initial sentence
            if (sentencesArray.length > 0) {
                const randomIndex = Math.floor(Math.random() * sentencesArray.length);
                setCurrentSentence(sentencesArray[randomIndex]);
                setUsedSentences([randomIndex]);
            }

            // Focus input
            if (inputRef.current) {
                inputRef.current.focus();
            }

            // Start timer
            startTimeRef.current = Date.now();
            timerRef.current = setInterval(() => {
                setTime(prev => {
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
    }, [isActive, difficulty]);

    // Clean up on unmount
    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    // Handle input change
    const handleInputChange = (e) => {
        const newInput = e.target.value;
        setInput(newInput);

        // Calculate error count
        let errors = 0;
        for (let i = 0; i < newInput.length; i++) {
            if (i >= currentSentence.length || newInput[i] !== currentSentence[i]) {
                errors++;
            }
        }
        setErrorCount(errors);

        // Check if completed sentence
        if (newInput === currentSentence) {
            handleSentenceComplete();
        }
    };

    // Handle completed sentence
    const handleSentenceComplete = () => {
        // Check if there were any errors
        const isCorrect = errorCount === 0;

        // Update stats
        setSentencesTyped(prev => prev + 1);

        if (isCorrect) {
            setCorrectSentences(prev => prev + 1);
            setCombo(prev => prev + 1);

            // Calculate points
            const basePoints = 20;
            const difficultyMultiplier =
                difficulty === 'easy' ? 1 :
                    difficulty === 'medium' ? 1.5 : 2.5;
            const comboMultiplier = Math.min(combo + 1, 5) * 0.2 + 1; // Max 2x multiplier

            const points = Math.floor(basePoints * difficultyMultiplier * comboMultiplier);
            setScore(prev => prev + points);

            // Add time bonus for perfect typing
            setTime(prev => prev + 5);
        } else {
            // Reset combo
            setCombo(0);
        }

        // Reset input
        setInput('');

        // Get new sentence
        getNewSentence();

        // Calculate and update stats
        const elapsedTime = (Date.now() - startTimeRef.current) / 1000;
        const totalChars = sentencesTyped * (currentSentence.length / 5); // Convert to word count (avg 5 chars per word)
        const wpm = Math.round((totalChars / elapsedTime) * 60);
        const accuracy = Math.round((correctSentences / (sentencesTyped + 1)) * 100);

        updateStats({
            score: score + (isCorrect ? 20 : 0),
            wpm,
            accuracy
        });
    };

    // Get a new sentence that hasn't been used recently
    const getNewSentence = () => {
        if (sentences.length === 0) return;

        // Get unused sentence indices
        const usedIndices = new Set(usedSentences);
        const availableIndices = [];

        for (let i = 0; i < sentences.length; i++) {
            if (!usedIndices.has(i)) {
                availableIndices.push(i);
            }
        }

        // If all sentences used, reset
        if (availableIndices.length === 0) {
            setUsedSentences([]);
            const randomIndex = Math.floor(Math.random() * sentences.length);
            setCurrentSentence(sentences[randomIndex]);
            setUsedSentences([randomIndex]);
            return;
        }

        // Get random sentence from available
        const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        setCurrentSentence(sentences[randomIndex]);

        // Track used sentences (keep only last 3)
        setUsedSentences(prev => {
            const updated = [...prev, randomIndex];
            if (updated.length > 3) {
                return updated.slice(1);
            }
            return updated;
        });
    };

    // End the game and report results
    const handleGameEnd = () => {
        const elapsedTime = (Date.now() - startTimeRef.current) / 1000;
        const totalChars = sentencesTyped * (currentSentence?.length / 5 || 1); // Convert to word count
        const wpm = Math.round((totalChars / elapsedTime) * 60);
        const accuracy = Math.round((correctSentences / sentencesTyped) * 100 || 0);

        updateStats({
            score,
            wpm,
            accuracy,
            time: elapsedTime
        });

        endGame();
    };

    // Calculate progress percentage for timed games
    const getTimeProgress = () => {
        return (time / gameData.initialTime[difficulty]) * 100;
    };

    // Highlight text based on user input
    const getHighlightedSentence = () => {
        return currentSentence.split('').map((char, index) => {
            if (index >= input.length) {
                // Not typed yet
                return <span key={index} style={{ color: '#666' }}>{char}</span>;
            }

            if (char === input[index]) {
                // Correctly typed character
                return <span key={index} style={{ color: 'green' }}>{char}</span>;
            }

            // Incorrectly typed character
            return <span key={index} style={{ color: 'red', textDecoration: 'underline' }}>{char}</span>;
        });
    };

    return (
        <Box sx={{ width: '100%' }}>
            {/* Timer bar */}
            <Box sx={{ mb: 2 }}>
                <LinearProgress
                    variant="determinate"
                    value={getTimeProgress()}
                    color={time < 10 ? "error" : time < 20 ? "warning" : "primary"}
                    sx={{ height: 10, borderRadius: 5 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                        Time: {time}s
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Combo: {combo}x
                    </Typography>
                </Box>
            </Box>

            {/* Current sentence display */}
            <Paper
                elevation={3}
                sx={{
                    p: 3,
                    mb: 3,
                    borderRadius: 2,
                    backgroundColor: 'rgba(63, 81, 181, 0.05)',
                    minHeight: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Typography variant="h6" align="center" sx={{ lineHeight: 1.8 }}>
                    {getHighlightedSentence()}
                </Typography>
            </Paper>

            {/* Input field */}
            <TextField
                inputRef={inputRef}
                fullWidth
                variant="outlined"
                value={input}
                onChange={handleInputChange}
                placeholder="Type the entire sentence above exactly as shown"
                disabled={!isActive}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                sx={{ mb: 3 }}
                error={errorCount > 0}
            />

            {/* Stats */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                <Chip
                    label={`Completed: ${sentencesTyped}`}
                    color="primary"
                    variant="outlined"
                />
                <Chip
                    label={`Perfect: ${correctSentences}`}
                    color="success"
                    variant="outlined"
                />
                <Chip
                    label={`Errors: ${errorCount}`}
                    color={errorCount > 0 ? "error" : "default"}
                    variant="outlined"
                />
            </Box>
        </Box>
    );
};

export default TimeAttackGame;
