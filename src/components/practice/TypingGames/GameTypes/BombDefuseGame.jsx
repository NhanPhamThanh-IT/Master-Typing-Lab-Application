import { useState, useEffect, useRef } from 'react';
import {
    Box,
    Paper,
    Typography,
    TextField,
    LinearProgress,
    Chip,
    CircularProgress
} from '@mui/material';
import {
    Timer as TimerIcon,
    Close as FailIcon,
    Check as SuccessIcon,
    Whatshot as ExplosionIcon
} from '@mui/icons-material';

// Import game data
import { BOMB_CODES } from '../constants';

/**
 * BombDefuseGame - Game where users type codes quickly to defuse bombs
 * 
 * @param {Object} props - Component properties
 * @param {boolean} props.isActive - Whether the game is currently active
 * @param {string} props.difficulty - Current difficulty level (medium, hard)
 * @param {Function} props.updateStats - Callback to update game stats
 * @param {Function} props.endGame - Callback to end the game
 * @param {Object} props.gameData - Game configuration data
 */
const BombDefuseGame = ({ isActive, difficulty, updateStats, endGame, gameData }) => {
    const [currentCode, setCurrentCode] = useState('');
    const [input, setInput] = useState('');
    const [score, setScore] = useState(0);
    const [bombsDefused, setBombsDefused] = useState(0);
    const [bombsExploded, setBombsExploded] = useState(0);
    const [streak, setStreak] = useState(0);
    const [bombTimer, setBombTimer] = useState(gameData.bombTimers[difficulty]);
    const [gameTime, setGameTime] = useState(0);
    const [bombStatus, setBombStatus] = useState('ticking'); // 'ticking', 'defused', 'exploded'
    const [usedCodes, setUsedCodes] = useState([]);

    const inputRef = useRef(null);
    const timerRef = useRef(null);
    const gameTimerRef = useRef(null);
    const bombTimerRef = useRef(null);
    const explosionSoundRef = useRef(null);
    const defuseSoundRef = useRef(null);

    // Initialize game
    useEffect(() => {
        if (isActive) {
            // Start game timer
            gameTimerRef.current = setInterval(() => {
                setGameTime(prev => prev + 1);
            }, 1000);

            // Get initial bomb code
            getNewBomb();
        }

        return () => {
            if (gameTimerRef.current) clearInterval(gameTimerRef.current);
            if (bombTimerRef.current) clearInterval(bombTimerRef.current);
        };
    }, [isActive, difficulty]);

    // Clean up on unmount
    useEffect(() => {
        return () => {
            if (gameTimerRef.current) clearInterval(gameTimerRef.current);
            if (bombTimerRef.current) clearInterval(bombTimerRef.current);
        };
    }, []);

    // Start bomb timer when a new code is set
    useEffect(() => {
        if (currentCode && bombStatus === 'ticking') {
            // Reset bomb timer
            setBombTimer(gameData.bombTimers[difficulty]);

            // Focus input field
            if (inputRef.current) {
                inputRef.current.focus();
            }

            // Start bomb countdown
            bombTimerRef.current = setInterval(() => {
                setBombTimer(prev => {
                    if (prev <= 0.1) {
                        // Bomb exploded
                        clearInterval(bombTimerRef.current);
                        handleBombExplode();
                        return 0;
                    }
                    return parseFloat((prev - 0.1).toFixed(1));
                });
            }, 100);
        }

        return () => {
            if (bombTimerRef.current) clearInterval(bombTimerRef.current);
        };
    }, [currentCode, bombStatus]);

    // Handle input change
    const handleInputChange = (e) => {
        const newInput = e.target.value;
        setInput(newInput);

        // Check if code matches
        if (newInput === currentCode) {
            handleBombDefuse();
        }
    };

    // Get a new bomb code
    const getNewBomb = () => {
        // Get bomb codes for difficulty
        const codes = BOMB_CODES[difficulty];
        if (!codes || codes.length === 0) return;

        // Filter out recently used codes
        const availableCodes = codes.filter(code => !usedCodes.includes(code));

        // If all codes used, reset
        const selectedCode = availableCodes.length > 0
            ? availableCodes[Math.floor(Math.random() * availableCodes.length)]
            : codes[Math.floor(Math.random() * codes.length)];

        // Update current code
        setCurrentCode(selectedCode);
        setBombStatus('ticking');

        // Track used codes (only keep last 3)
        setUsedCodes(prev => {
            const updated = [...prev, selectedCode];
            return updated.length > 3 ? updated.slice(-3) : updated;
        });

        // Clear input
        setInput('');
    };

    // Handle bomb defusal
    const handleBombDefuse = () => {
        // Stop bomb timer
        clearInterval(bombTimerRef.current);

        // Update bomb status
        setBombStatus('defused');
        setBombsDefused(prev => prev + 1);

        // Update streak
        setStreak(prev => prev + 1);

        // Calculate points
        const basePoints = 50;
        const timeBonus = Math.round((bombTimer / gameData.bombTimers[difficulty]) * 30);
        const streakMultiplier = Math.min(streak + 1, 5) * 0.2 + 1; // Max 2x multiplier

        const points = Math.floor((basePoints + timeBonus) * streakMultiplier);
        setScore(prev => prev + points);

        // Play defuse sound
        if (defuseSoundRef.current) {
            defuseSoundRef.current.play();
        }

        // Update stats
        const wpm = Math.round((bombsDefused + 1) / (gameTime / 60));
        const accuracy = Math.round(((bombsDefused + 1) / (bombsDefused + bombsExploded + 1)) * 100);

        updateStats({
            score: score + points,
            wpm,
            accuracy
        });

        // Set timeout for next bomb
        setTimeout(() => {
            getNewBomb();
        }, 1500);
    };

    // Handle bomb explosion
    const handleBombExplode = () => {
        // Update bomb status
        setBombStatus('exploded');
        setBombsExploded(prev => prev + 1);

        // Reset streak
        setStreak(0);

        // Play explosion sound
        if (explosionSoundRef.current) {
            explosionSoundRef.current.play();
        }

        // Update stats
        const wpm = Math.round(bombsDefused / (gameTime / 60) || 0);
        const accuracy = Math.round((bombsDefused / (bombsDefused + bombsExploded + 1)) * 100);

        updateStats({
            wpm,
            accuracy
        });

        // Check if game should end
        if (bombsExploded >= 3) {
            // Game over after 3 explosions
            setTimeout(() => {
                handleGameEnd();
            }, 2000);
        } else {
            // Set timeout for next bomb
            setTimeout(() => {
                getNewBomb();
            }, 2000);
        }
    };

    // End the game and report results
    const handleGameEnd = () => {
        clearInterval(gameTimerRef.current);
        clearInterval(bombTimerRef.current);

        const wpm = Math.round(bombsDefused / (gameTime / 60) || 0);
        const accuracy = Math.round((bombsDefused / (bombsDefused + bombsExploded)) * 100 || 0);

        updateStats({
            score,
            wpm,
            accuracy,
            time: gameTime
        });

        endGame();
    };

    return (
        <Box sx={{ width: '100%' }}>
            {/* Game stats */}
            <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 2 }}>
                <Chip
                    icon={<SuccessIcon />}
                    label={`Defused: ${bombsDefused}`}
                    color="success"
                    variant="outlined"
                />
                <Chip
                    icon={<TimerIcon />}
                    label={`Game Time: ${gameTime}s`}
                    color="primary"
                    variant="outlined"
                />
                <Chip
                    icon={<ExplosionIcon />}
                    label={`Exploded: ${bombsExploded}/3`}
                    color="error"
                    variant="outlined"
                />
            </Box>

            {/* Bomb timer progress */}
            <LinearProgress
                variant="determinate"
                value={(bombTimer / gameData.bombTimers[difficulty]) * 100}
                color={
                    bombStatus === 'defused'
                        ? 'success'
                        : bombStatus === 'exploded'
                            ? 'error'
                            : bombTimer < gameData.bombTimers[difficulty] * 0.3
                                ? 'error'
                                : bombTimer < gameData.bombTimers[difficulty] * 0.6
                                    ? 'warning'
                                    : 'info'
                }
                sx={{
                    height: 15,
                    borderRadius: 2,
                    mb: 1
                }}
            />

            <Box sx={{ textAlign: 'center', mb: 1 }}>
                <Typography variant="h6" color={bombTimer < 5 ? "error.main" : "text.secondary"}>
                    {bombTimer.toFixed(1)}s
                </Typography>
            </Box>

            {/* Bomb display */}
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    mb: 3,
                    borderRadius: 2,
                    backgroundColor: bombStatus === 'defused'
                        ? 'success.light'
                        : bombStatus === 'exploded'
                            ? 'error.light'
                            : 'grey.100',
                    border: '5px solid',
                    borderColor: bombStatus === 'defused'
                        ? 'success.main'
                        : bombStatus === 'exploded'
                            ? 'error.main'
                            : 'grey.400',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                }}
            >
                {/* Countdown animation */}
                {bombStatus === 'ticking' && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            width: '100%',
                            background: `linear-gradient(90deg, rgba(244,67,54,0.3) ${(bombTimer / gameData.bombTimers[difficulty]) * 100}%, transparent ${(bombTimer / gameData.bombTimers[difficulty]) * 100}%)`,
                            transition: 'all 0.1s linear'
                        }}
                    />
                )}

                {/* Status indicator */}
                <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
                    {bombStatus === 'ticking' && (
                        <CircularProgress
                            size={30}
                            color={bombTimer < 5 ? "error" : "primary"}
                            variant="determinate"
                            value={(bombTimer / gameData.bombTimers[difficulty]) * 100}
                        />
                    )}
                    {bombStatus === 'defused' && (
                        <SuccessIcon color="success" sx={{ fontSize: 30 }} />
                    )}
                    {bombStatus === 'exploded' && (
                        <ExplosionIcon color="error" sx={{ fontSize: 30 }} />
                    )}
                </Box>

                {/* Code display */}
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            fontFamily: 'monospace',
                            letterSpacing: 3,
                            fontWeight: 'bold',
                            color: bombStatus === 'defused'
                                ? 'success.contrastText'
                                : bombStatus === 'exploded'
                                    ? 'error.contrastText'
                                    : 'text.primary'
                        }}
                    >
                        {currentCode}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            mt: 1,
                            color: bombStatus === 'defused'
                                ? 'success.contrastText'
                                : bombStatus === 'exploded'
                                    ? 'error.contrastText'
                                    : 'text.secondary'
                        }}
                    >
                        {bombStatus === 'ticking' && "Type the code exactly to defuse the bomb!"}
                        {bombStatus === 'defused' && "Bomb successfully defused!"}
                        {bombStatus === 'exploded' && "Bomb exploded!"}
                    </Typography>
                </Box>

                {/* Animation effects based on status */}
                {bombStatus === 'defused' && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'radial-gradient(circle, rgba(76,175,80,0.3) 0%, rgba(76,175,80,0) 70%)',
                            animation: 'pulse 2s infinite',
                            pointerEvents: 'none'
                        }}
                    />
                )}

                {bombStatus === 'exploded' && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'radial-gradient(circle, rgba(244,67,54,0.5) 0%, rgba(244,67,54,0) 70%)',
                            animation: 'explode 1s',
                            pointerEvents: 'none'
                        }}
                    />
                )}
            </Paper>

            {/* Input field */}
            <TextField
                inputRef={inputRef}
                fullWidth
                variant="outlined"
                value={input}
                onChange={handleInputChange}
                placeholder="Type the defuse code exactly as shown"
                disabled={!isActive || bombStatus !== 'ticking'}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                sx={{ mb: 3 }}
            />

            {/* Current streak */}
            <Box sx={{ textAlign: 'center' }}>
                <Chip
                    label={`Current Streak: ${streak}`}
                    color={
                        streak >= 5 ? "success" :
                            streak >= 3 ? "primary" :
                                "default"
                    }
                    sx={{
                        fontWeight: streak >= 3 ? 'bold' : 'normal',
                        fontSize: streak >= 5 ? '1.1rem' : 'inherit'
                    }}
                />

                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {streak >= 5 ? "Amazing streak! Keep it up!" :
                        streak >= 3 ? "Great streak! You're on fire!" :
                            "Build your streak to earn bonus points!"}
                </Typography>
            </Box>

            {/* Hidden audio elements */}
            <audio ref={explosionSoundRef} src="/sounds/explosion.mp3" />
            <audio ref={defuseSoundRef} src="/sounds/defuse.mp3" />
        </Box>
    );
};

export default BombDefuseGame;
