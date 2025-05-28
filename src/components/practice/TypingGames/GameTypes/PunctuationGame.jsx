import { useState, useEffect, useRef } from 'react';
import {
    Box,
    Paper,
    Typography,
    TextField,
    LinearProgress,
    Chip,
    Stack,
    Grid,
    Divider
} from '@mui/material';

// Import game data
import { PUNCTUATION_DATA } from '../constants';

/**
 * PunctuationGame - Game focusing on typing punctuation and special characters
 * 
 * @param {Object} props - Component properties
 * @param {boolean} props.isActive - Whether the game is currently active
 * @param {string} props.difficulty - Current difficulty level (easy, medium, hard)
 * @param {Function} props.updateStats - Callback to update game stats
 * @param {Function} props.endGame - Callback to end the game
 * @param {Object} props.gameData - Game configuration data
 */
const PunctuationGame = ({ isActive, difficulty, updateStats, endGame, gameData }) => {
    const [currentText, setCurrentText] = useState('');
    const [input, setInput] = useState('');
    const [score, setScore] = useState(0);
    const [linesCompleted, setLinesCompleted] = useState(0);
    const [perfectLines, setPerfectLines] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(gameData.timeLimit?.[difficulty] || 60);
    const [specialCharCount, setSpecialCharCount] = useState(0);
    const [errorCount, setErrorCount] = useState(0);
    const [usedTexts, setUsedTexts] = useState([]);

    const inputRef = useRef(null);
    const timerRef = useRef(null);
    const startTimeRef = useRef(null);

    // Special characters that give bonus points
    const specialChars = new Set(['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=',
        '{', '}', '[', ']', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.',
        '?', '/', '~', '`']);

    // Set up the game when it becomes active
    useEffect(() => {
        if (isActive) {
            // Get text data for selected difficulty
            const textsArray = PUNCTUATION_DATA[difficulty] || [];

            // Set initial text
            if (textsArray.length > 0) {
                const randomIndex = Math.floor(Math.random() * textsArray.length);
                setCurrentText(textsArray[randomIndex]);
                setUsedTexts([randomIndex]);

                // Count special characters in the text
                const specialCount = [...textsArray[randomIndex]].filter(char => specialChars.has(char)).length;
                setSpecialCharCount(specialCount);
            }

            // Focus input
            if (inputRef.current) {
                inputRef.current.focus();
            }

            // Start timer
            startTimeRef.current = Date.now();
            timerRef.current = setInterval(() => {
                setTimeRemaining(prev => {
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

        // Calculate errors
        let errors = 0;
        for (let i = 0; i < newInput.length; i++) {
            if (i >= currentText.length || newInput[i] !== currentText[i]) {
                errors++;
            }
        }
        setErrorCount(errors);

        // Check if completed text
        if (newInput === currentText) {
            handleLineComplete();
        }
    };

    // Handle completed line
    const handleLineComplete = () => {
        // Check if perfect (no errors)
        const isPerfect = errorCount === 0;

        // Update stats
        setLinesCompleted(prev => prev + 1);

        if (isPerfect) {
            setPerfectLines(prev => prev + 1);

            // Add perfect line bonus
            setScore(prev => prev + 20);
        }

        // Calculate points
        const basePoints = 5 * currentText.length;
        const specialBonus = [...currentText].filter(char => specialChars.has(char)).length * 2;

        setScore(prev => prev + basePoints + specialBonus);

        // Reset input
        setInput('');

        // Get new text
        getNewText();

        // Calculate and update stats
        const elapsedTime = (Date.now() - startTimeRef.current) / 1000;
        const totalChars = linesCompleted * (currentText.length / 5); // Convert to word count
        const wpm = Math.round((totalChars / elapsedTime) * 60);
        const accuracy = Math.round((perfectLines / (linesCompleted + 1)) * 100);

        updateStats({
            score: score + basePoints + specialBonus + (isPerfect ? 20 : 0),
            wpm,
            accuracy
        });
    };

    // Get a new text that hasn't been used recently
    const getNewText = () => {
        const texts = PUNCTUATION_DATA[difficulty];
        if (!texts || texts.length === 0) return;

        // Get unused text indices
        const usedIndices = new Set(usedTexts);
        const availableIndices = [];

        for (let i = 0; i < texts.length; i++) {
            if (!usedIndices.has(i)) {
                availableIndices.push(i);
            }
        }

        // If all texts used, reset
        if (availableIndices.length === 0) {
            setUsedTexts([]);
            const randomIndex = Math.floor(Math.random() * texts.length);
            setCurrentText(texts[randomIndex]);
            setUsedTexts([randomIndex]);

            // Count special characters
            const specialCount = [...texts[randomIndex]].filter(char => specialChars.has(char)).length;
            setSpecialCharCount(specialCount);

            return;
        }

        // Get random text from available
        const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        setCurrentText(texts[randomIndex]);

        // Count special characters
        const specialCount = [...texts[randomIndex]].filter(char => specialChars.has(char)).length;
        setSpecialCharCount(specialCount);

        // Track used texts (keep only last 3)
        setUsedTexts(prev => {
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
        const totalChars = linesCompleted * (currentText?.length / 5 || 1);
        const wpm = Math.round((totalChars / elapsedTime) * 60);
        const accuracy = Math.round((perfectLines / linesCompleted) * 100 || 0);

        updateStats({
            score,
            wpm,
            accuracy,
            time: gameData.timeLimit?.[difficulty] - timeRemaining
        });

        endGame();
    };

    // Highlight text based on user input
    const getHighlightedText = () => {
        return currentText.split('').map((char, index) => {
            const style = {};

            // Highlight special characters
            if (specialChars.has(char)) {
                style.fontWeight = 'bold';
                style.color = '#9c27b0'; // secondary color
            }

            if (index >= input.length) {
                // Not typed yet
                return <span key={index} style={style}>{char}</span>;
            }

            if (char === input[index]) {
                // Correctly typed character
                return <span key={index} style={{ ...style, color: 'green' }}>{char}</span>;
            }

            // Incorrectly typed character
            return <span key={index} style={{ color: 'red', textDecoration: 'underline' }}>{char}</span>;
        });
    };

    return (
        <Box sx={{ width: '100%' }}>
            {/* Timer */}
            <Box sx={{ mb: 2 }}>
                <LinearProgress
                    variant="determinate"
                    value={(timeRemaining / (gameData.timeLimit?.[difficulty] || 60)) * 100}
                    color={
                        timeRemaining < 10 ? "error" :
                            timeRemaining < 30 ? "warning" : "primary"
                    }
                    sx={{ height: 10, borderRadius: 5 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                        Time: {timeRemaining}s
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Special Characters: {specialCharCount}
                    </Typography>
                </Box>
            </Box>

            {/* Current text display */}
            <Paper
                elevation={3}
                sx={{
                    p: 3,
                    mb: 3,
                    borderRadius: 2,
                    backgroundColor: 'rgba(63, 81, 181, 0.05)',
                    minHeight: '100px'
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontFamily: difficulty === 'hard' ? 'monospace' : 'inherit',
                        lineHeight: 1.8
                    }}
                >
                    {getHighlightedText()}
                </Typography>
            </Paper>

            {/* Keyboard layout hint (for hard difficulty) */}
            {difficulty === 'hard' && (
                <Box sx={{ mb: 3 }}>
                    <Divider sx={{ my: 2 }}>
                        <Chip label="Keyboard Reference" />
                    </Divider>

                    <Grid container spacing={0.5} sx={{ maxWidth: '100%', overflowX: 'auto' }}>
                        {/* Row 1: numbers and symbols */}
                        <Grid size={{ xs: 12 }}>
                            <Stack direction="row" spacing={0.5} justifyContent="center">
                                {['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='].map(key => (
                                    <Paper
                                        key={key}
                                        sx={{
                                            width: 36,
                                            height: 36,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            bgcolor: specialChars.has(key) ? 'rgba(156, 39, 176, 0.1)' : 'inherit'
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: specialChars.has(key) ? 'bold' : 'normal',
                                                color: specialChars.has(key) ? 'secondary.main' : 'inherit'
                                            }}
                                        >
                                            {key}
                                        </Typography>
                                    </Paper>
                                ))}
                            </Stack>
                        </Grid>

                        {/* Row 2: q-p and brackets */}
                        <Grid size={{ xs: 12 }}>
                            <Stack direction="row" spacing={0.5} justifyContent="center">
                                {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'].map(key => (
                                    <Paper
                                        key={key}
                                        sx={{
                                            width: 36,
                                            height: 36,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            bgcolor: specialChars.has(key) ? 'rgba(156, 39, 176, 0.1)' : 'inherit'
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: specialChars.has(key) ? 'bold' : 'normal',
                                                color: specialChars.has(key) ? 'secondary.main' : 'inherit'
                                            }}
                                        >
                                            {key}
                                        </Typography>
                                    </Paper>
                                ))}
                            </Stack>
                        </Grid>

                        {/* Row 3: a-l and quotes */}
                        <Grid size={{ xs: 12 }}>
                            <Stack direction="row" spacing={0.5} justifyContent="center">
                                {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"].map(key => (
                                    <Paper
                                        key={key}
                                        sx={{
                                            width: 36,
                                            height: 36,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            bgcolor: specialChars.has(key) ? 'rgba(156, 39, 176, 0.1)' : 'inherit'
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: specialChars.has(key) ? 'bold' : 'normal',
                                                color: specialChars.has(key) ? 'secondary.main' : 'inherit'
                                            }}
                                        >
                                            {key}
                                        </Typography>
                                    </Paper>
                                ))}
                            </Stack>
                        </Grid>

                        {/* Row 4: z-/ */}
                        <Grid size={{ xs: 12 }}>
                            <Stack direction="row" spacing={0.5} justifyContent="center">
                                {['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'].map(key => (
                                    <Paper
                                        key={key}
                                        sx={{
                                            width: 36,
                                            height: 36,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            bgcolor: specialChars.has(key) ? 'rgba(156, 39, 176, 0.1)' : 'inherit'
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: specialChars.has(key) ? 'bold' : 'normal',
                                                color: specialChars.has(key) ? 'secondary.main' : 'inherit'
                                            }}
                                        >
                                            {key}
                                        </Typography>
                                    </Paper>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            )}

            {/* Input field */}
            <TextField
                inputRef={inputRef}
                fullWidth
                variant="outlined"
                value={input}
                onChange={handleInputChange}
                placeholder="Type the text above exactly as shown, including punctuation and special characters"
                disabled={!isActive}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                sx={{ mb: 3 }}
                error={errorCount > 0}
            />

            {/* Stats */}
            <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid size={{ xs: 4 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="body2" color="text.secondary">Lines Completed</Typography>
                        <Typography variant="h6">{linesCompleted}</Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 4 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="body2" color="text.secondary">Perfect Lines</Typography>
                        <Typography variant="h6">{perfectLines}</Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 4 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="body2" color="text.secondary">Current Errors</Typography>
                        <Typography variant="h6" color={errorCount > 0 ? "error.main" : "inherit"}>
                            {errorCount}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PunctuationGame;
