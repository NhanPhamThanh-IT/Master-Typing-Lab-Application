import { useState, useEffect, useRef } from 'react';
import {
    Box,
    Paper,
    Typography,
    Button,
    Divider,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
} from '@mui/material';
import {
    ArrowBack as BackIcon,
    PlayArrow as StartIcon,
    Refresh as RestartIcon,
    LiveHelp as LiveHelpIcon
} from '@mui/icons-material';

// Game components
import WordTypingGame from './GameTypes/WordTypingGame';
import TimeAttackGame from './GameTypes/TimeAttackGame';
import BombDefuseGame from './GameTypes/BombDefuseGame';
import PunctuationGame from './GameTypes/PunctuationGame';

// Game data constants
import { DIFFICULTY_LEVELS } from './constants';

/**
 * GameArea - The main component for playing a typing game
 * 
 * @param {Object} props - Component properties
 * @param {Object} props.game - The selected game data
 * @param {string} props.difficultyLevel - Current difficulty level
 * @param {boolean} props.isGameActive - Whether the game is currently active
 * @param {Function} props.onDifficultyChange - Callback for changing difficulty
 * @param {Function} props.onGameStart - Callback for starting the game
 * @param {Function} props.onGameEnd - Callback for ending the game
 * @param {Function} props.onExitGame - Callback for exiting the game
 * @param {Function} props.onToggleInstructions - Callback for toggling the instructions view
 */
const GameArea = ({
    game,
    difficultyLevel,
    isGameActive,
    onDifficultyChange,
    onGameStart,
    onGameEnd,
    onExitGame,
    onToggleInstructions
}) => {
    const [countdown, setCountdown] = useState(3);
    const [isCountingDown, setIsCountingDown] = useState(false);
    const [stats, setStats] = useState({
        score: 0,
        wpm: 0,
        accuracy: 100,
        time: 0
    });

    const countdownIntervalRef = useRef(null);
    const statsIntervalRef = useRef(null);
    const startTimeRef = useRef(null);
    const audioRef = useRef(null);

    // Handle start button click
    const handleStart = () => {
        setIsCountingDown(true);
        setCountdown(3);

        // Play countdown sound
        if (audioRef.current) {
            audioRef.current.play();
        }

        // Start countdown
        countdownIntervalRef.current = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(countdownIntervalRef.current);
                    setIsCountingDown(false);
                    onGameStart(); // Start the game
                    startTimeRef.current = Date.now();

                    // Start stats tracking interval
                    statsIntervalRef.current = setInterval(() => {
                        setStats(prev => ({
                            ...prev,
                            time: Math.floor((Date.now() - startTimeRef.current) / 1000)
                        }));
                    }, 1000);

                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    // Clear intervals on unmount
    useEffect(() => {
        return () => {
            if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
            if (statsIntervalRef.current) clearInterval(statsIntervalRef.current);
        };
    }, []);

    // Update stats and stop game when needed
    const updateStats = (newStats) => {
        setStats(prev => ({ ...prev, ...newStats }));
    };

    // End the game and report results
    const endGame = () => {
        if (statsIntervalRef.current) clearInterval(statsIntervalRef.current);
        onGameEnd(stats); // Pass final stats to parent
    };

    // Render the specific game component based on game type
    const renderGameComponent = () => {
        switch (game.type) {
            case 'word-typing':
                return (
                    <WordTypingGame
                        isActive={isGameActive}
                        difficulty={difficultyLevel}
                        updateStats={updateStats}
                        endGame={endGame}
                        gameData={game}
                    />
                );
            case 'time-attack':
                return (
                    <TimeAttackGame
                        isActive={isGameActive}
                        difficulty={difficultyLevel}
                        updateStats={updateStats}
                        endGame={endGame}
                        gameData={game}
                    />
                );
            case 'bomb-defuse':
                return (
                    <BombDefuseGame
                        isActive={isGameActive}
                        difficulty={difficultyLevel}
                        updateStats={updateStats}
                        endGame={endGame}
                        gameData={game}
                    />
                );
            case 'punctuation':
                return (
                    <PunctuationGame
                        isActive={isGameActive}
                        difficulty={difficultyLevel}
                        updateStats={updateStats}
                        endGame={endGame}
                        gameData={game}
                    />
                );
            default:
                return (
                    <Box sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h6">Game type not available</Typography>
                    </Box>
                );
        }
    };

    return (
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            {/* Game header */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button
                        variant="filled"
                        color="primary"
                        startIcon={<BackIcon />}
                        onClick={onExitGame}
                        sx={{ mr: 1 }}
                    >
                        Back
                    </Button>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <FormControl size="small" sx={{ minWidth: 120 }} disabled={isGameActive || isCountingDown}>
                        <InputLabel>Difficulty</InputLabel>
                        <Select
                            value={difficultyLevel}
                            label="Difficulty"
                            onChange={(e) => onDifficultyChange(e.target.value)}
                        >
                            {DIFFICULTY_LEVELS.map((level) => (
                                <MenuItem
                                    key={level.value}
                                    value={level.value}
                                    disabled={!game.difficulty.includes(level.value)}
                                >
                                    {level.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {isGameActive ? (
                        <Button
                            variant="contained"
                            color="error"
                            startIcon={<RestartIcon />}
                            onClick={endGame}
                        >
                            <Typography sx={{ color: 'white', textTransform: 'none', fontWeight: 600 }}>
                                End Game
                            </Typography>
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            color="success"
                            startIcon={<StartIcon sx={{ color: 'white' }} />}
                            onClick={handleStart}
                            disabled={isCountingDown}
                        >
                            <Typography sx={{ color: 'white', textTransform: 'none', fontWeight: 600 }}>
                                {isCountingDown ? `Starting in ${countdown}...` : 'Start Game'}
                            </Typography>
                        </Button>
                    )}

                    {/* Instructions button */}
                    {!isGameActive && (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={onToggleInstructions}
                        >
                            <LiveHelpIcon />
                        </Button>
                    )}
                </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Stats display */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid size={{ xs: 3 }}>
                    <Box sx={{ textAlign: 'center', p: 1, bgcolor: 'primary.light', borderRadius: 1 }}>
                        <Typography variant="body2" color="common.white">Score</Typography>
                        <Typography variant="h6" color="common.white">{stats.score}</Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 3 }}>
                    <Box sx={{ textAlign: 'center', p: 1, bgcolor: 'secondary.light', borderRadius: 1 }}>
                        <Typography variant="body2" color="common.white">WPM</Typography>
                        <Typography variant="h6" color="common.white">{stats.wpm}</Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 3 }}>
                    <Box sx={{ textAlign: 'center', p: 1, bgcolor: 'success.light', borderRadius: 1 }}>
                        <Typography variant="body2" color="common.white">Accuracy</Typography>
                        <Typography variant="h6" color="common.white">{stats.accuracy}%</Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 3 }}>
                    <Box sx={{ textAlign: 'center', p: 1, bgcolor: 'warning.light', borderRadius: 1 }}>
                        <Typography variant="body2" color="common.white">Time</Typography>
                        <Typography variant="h6" color="common.white">{stats.time}s</Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* Countdown overlay */}
            {isCountingDown && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'rgba(0,0,0,0.7)',
                        zIndex: 10,
                        borderRadius: 2
                    }}
                >
                    <Typography
                        variant="h1"
                        color="common.white"
                        sx={{
                            fontSize: '6rem',
                            fontWeight: 'bold',
                            animation: 'pulse 1s infinite'
                        }}
                    >
                        {countdown}
                    </Typography>
                </Box>
            )}            {/* Game content */}
            <Box sx={{ position: 'relative', minHeight: 300 }}>
                {renderGameComponent()}
            </Box>

            {/* Hidden audio element for game sounds */}
            <audio ref={audioRef} src="/sounds/countdown.mp3" />
        </Paper>
    );
};

export default GameArea;
