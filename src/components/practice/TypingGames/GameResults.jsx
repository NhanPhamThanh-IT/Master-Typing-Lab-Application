import {
    useState,
    useEffect
} from 'react';
import {
    Box,
    Paper,
    Typography,
    Button,
    Grid,
    CircularProgress,
    Avatar,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Fade,
    Zoom,
    Grow,
} from '@mui/material';
import {
    EmojiEvents as TrophyIcon,
    Speed as SpeedIcon,
    CheckCircle as AccuracyIcon,
    Timeline as StatsIcon,
    Replay as ReplayIcon,
    Home as HomeIcon,
    Share as ShareIcon,
    Bolt as BoltIcon,
    Celebration as CelebrationIcon
} from '@mui/icons-material';

/**
 * GameResults - Displays the results after a game is completed
 * 
 * @param {Object} props - Component properties
 * @param {Object} props.results - The results data (score, wpm, accuracy, time)
 * @param {Function} props.onRestart - Callback for restarting the game
 * @param {Function} props.onExitGame - Callback for exiting the game
 */
const GameResults = ({ results, onRestart, onExitGame }) => {
    const [showResults, setShowResults] = useState(false);
    const [animationStage, setAnimationStage] = useState(0);

    // Progressive animation effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowResults(true);
        }, 500);

        // Create staged animations for a more dynamic reveal
        const stageTimers = [
            setTimeout(() => setAnimationStage(1), 800),
            setTimeout(() => setAnimationStage(2), 1200),
            setTimeout(() => setAnimationStage(3), 1600)
        ];

        return () => {
            clearTimeout(timer);
            stageTimers.forEach(t => clearTimeout(t));
        };
    }, []);

    // If no results available
    if (!results) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                p: 4,
                height: '300px',
                alignItems: 'center'
            }}>
                <CircularProgress sx={{
                    color: 'secondary.main',
                    '& .MuiCircularProgress-circle': {
                        strokeLinecap: 'round',
                    }
                }} size={60} thickness={4} />
            </Box>
        );
    }

    // Enhanced performance level calculation with creative themes
    const getPerformanceLevel = () => {
        const { accuracy, wpm } = results;

        if (wpm > 80 && accuracy > 95)
            return {
                level: 'Master Typist',
                color: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                glow: '0 0 15px rgba(255, 215, 0, 0.7)',
                icon: <CelebrationIcon sx={{ fontSize: 40 }} />,
                borderColor: '#FFD700'
            };
        if (wpm > 60 && accuracy > 90)
            return {
                level: 'Expert',
                color: 'linear-gradient(135deg, #E0E0E0 0%, #B0B0B0 100%)',
                glow: '0 0 10px rgba(192, 192, 192, 0.6)',
                icon: <BoltIcon sx={{ fontSize: 40 }} />,
                borderColor: '#C0C0C0'
            };
        if (wpm > 40 && accuracy > 85)
            return {
                level: 'Proficient',
                color: 'linear-gradient(135deg, #CD7F32 0%, #A05000 100%)',
                glow: '0 0 8px rgba(205, 127, 50, 0.5)',
                icon: <TrophyIcon sx={{ fontSize: 40 }} />,
                borderColor: '#CD7F32'
            };
        return {
            level: 'Apprentice',
            color: 'linear-gradient(135deg, #42A5F5 0%, #1565C0 100%)',
            glow: 'none',
            icon: <TrophyIcon sx={{ fontSize: 40 }} />,
            borderColor: '#1976d2'
        };
    };

    const performance = getPerformanceLevel();

    // Create radial progress for the score visualization
    const scorePercentage = Math.min(100, Math.max(0, (results.score / 1000) * 100));

    // Get appropriate feedback based on performance
    const getFeedbackEmoji = () => {
        if (results.wpm > 70) return '🚀';
        if (results.wpm > 50) return '✨';
        return '💪';
    };

    return (
        <Paper
            elevation={5}
            sx={{
                p: { xs: 2, sm: 4 },
                borderRadius: 4,
                background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(240,240,255,0.8) 100%)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1), 0 1px 8px rgba(0,0,0,0.07)',
                overflow: 'hidden',
                position: 'relative'
            }}
        >
            {/* Abstract background shapes */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(25,118,210,0.05) 0%, rgba(66,165,245,0.02) 70%, rgba(0,0,0,0) 100%)',
                transform: 'translate(30%, -30%)',
                zIndex: 0
            }} />
            <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(156,39,176,0.05) 0%, rgba(103,58,183,0.02) 70%, rgba(0,0,0,0) 100%)',
                transform: 'translate(-30%, 30%)',
                zIndex: 0
            }} />

            <Box sx={{ textAlign: 'center', mb: 4, position: 'relative', zIndex: 1 }}>
                <Zoom in={showResults} timeout={1000}>
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            background: 'linear-gradient(90deg, #2196F3 0%, #673AB7 50%, #F44336 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            letterSpacing: '0.5px',
                            textShadow: '0px 2px 5px rgba(0,0,0,0.1)',
                            mb: 1
                        }}
                    >
                        Game Results
                    </Typography>
                </Zoom>
                <Fade in={animationStage >= 1} timeout={1000}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            opacity: 0.7,
                            maxWidth: '600px',
                            mx: 'auto'
                        }}
                    >
                        Check out your performance metrics and see how you did!
                    </Typography>
                </Fade>
            </Box>

            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Grow in={animationStage >= 1} timeout={800}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            p: { xs: 2, sm: 3 },
                            borderRadius: 4,
                            bgcolor: 'rgba(255,255,255,0.7)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(255,255,255,0.1)',
                            position: 'relative',
                            overflow: 'hidden',
                            height: '100%'
                        }}>
                            {/* Curved progress background */}
                            <Box sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '40%',
                                background: `${performance.color}`,
                                clipPath: 'ellipse(100% 55% at 50% 0%)',
                                opacity: 0.9,
                                zIndex: 0
                            }} />

                            <Avatar
                                sx={{
                                    width: 100,
                                    height: 100,
                                    background: performance.color,
                                    mb: 2,
                                    mt: 3,
                                    border: `4px solid white`,
                                    boxShadow: performance.glow,
                                    zIndex: 1,
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {performance.icon}
                            </Avatar>

                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    mb: 1,
                                    color: '#333',
                                    zIndex: 1
                                }}
                            >
                                {performance.level}
                            </Typography>

                            <Box sx={{
                                position: 'relative',
                                width: 120,
                                height: 120,
                                my: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Box sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    background: `conic-gradient(${performance.color} ${scorePercentage}%, transparent ${scorePercentage}%)`,
                                    boxShadow: 'inset 0 0 0 10px rgba(255,255,255,0.8)',
                                }} />
                                <Box sx={{
                                    position: 'absolute',
                                    top: '10px',
                                    left: '10px',
                                    width: 'calc(100% - 20px)',
                                    height: 'calc(100% - 20px)',
                                    borderRadius: '50%',
                                    background: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Typography variant="h3" sx={{ fontWeight: 800, color: '#333' }}>
                                        {results.score}
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontWeight: 500,
                                    mb: 2,
                                    color: 'rgba(0,0,0,0.6)'
                                }}
                            >
                                POINTS
                            </Typography>

                            <Box
                                sx={{
                                    width: '100%',
                                    mt: 2,
                                    position: 'relative',
                                    zIndex: 1,
                                }}
                            >
                                <List component="div" disablePadding>
                                    <ListItem
                                        sx={{
                                            borderRadius: 2,
                                            mb: 1.5,
                                            background: 'rgba(255,255,255,0.5)',
                                            backdropFilter: 'blur(5px)',
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                background: 'rgba(255,255,255,0.8)',
                                                transform: 'translateY(-2px)'
                                            }
                                        }}
                                    >
                                        <ListItemIcon sx={{
                                            background: 'linear-gradient(135deg, #2196F3 0%, #0D47A1 100%)',
                                            borderRadius: '50%',
                                            width: 36,
                                            height: 36,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            color: 'white',
                                            mr: 1
                                        }}>
                                            <SpeedIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Typography variant="body2" color="textSecondary">
                                                    TYPING SPEED
                                                </Typography>
                                            }
                                            secondary={
                                                <Typography variant="h6" sx={{ fontWeight: 700, color: '#333', mt: 0.5 }}>
                                                    {results.wpm} WPM
                                                </Typography>
                                            }
                                        />
                                    </ListItem>

                                    <ListItem
                                        sx={{
                                            borderRadius: 2,
                                            mb: 1.5,
                                            background: 'rgba(255,255,255,0.5)',
                                            backdropFilter: 'blur(5px)',
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                background: 'rgba(255,255,255,0.8)',
                                                transform: 'translateY(-2px)'
                                            }
                                        }}
                                    >
                                        <ListItemIcon sx={{
                                            background: 'linear-gradient(135deg, #4CAF50 0%, #1B5E20 100%)',
                                            borderRadius: '50%',
                                            width: 36,
                                            height: 36,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            color: 'white',
                                            mr: 1
                                        }}>
                                            <AccuracyIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Typography variant="body2" color="textSecondary">
                                                    ACCURACY
                                                </Typography>
                                            }
                                            secondary={
                                                <Typography variant="h6" sx={{ fontWeight: 700, color: '#333', mt: 0.5 }}>
                                                    {results.accuracy}%
                                                </Typography>
                                            }
                                        />
                                    </ListItem>

                                    <ListItem
                                        sx={{
                                            borderRadius: 2,
                                            mb: 1.5,
                                            background: 'rgba(255,255,255,0.5)',
                                            backdropFilter: 'blur(5px)',
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                background: 'rgba(255,255,255,0.8)',
                                                transform: 'translateY(-2px)'
                                            }
                                        }}
                                    >
                                        <ListItemIcon sx={{
                                            background: 'linear-gradient(135deg, #9C27B0 0%, #4A148C 100%)',
                                            borderRadius: '50%',
                                            width: 36,
                                            height: 36,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            color: 'white',
                                            mr: 1
                                        }}>
                                            <StatsIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Typography variant="body2" color="textSecondary">
                                                    TIME SPENT
                                                </Typography>
                                            }
                                            secondary={
                                                <Typography variant="h6" sx={{ fontWeight: 700, color: '#333', mt: 0.5 }}>
                                                    {results.time} seconds
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Grow>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Fade in={animationStage >= 2} timeout={1200}>
                        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    mb: 3,
                                    flexGrow: 1,
                                    borderRadius: 4,
                                    background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,240,255,1))',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05), 0 1px 8px rgba(0,0,0,0.07)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Decorative elements */}
                                <Box sx={{
                                    position: 'absolute',
                                    top: '-15px',
                                    right: '-15px',
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    background: `${performance.color}`,
                                    opacity: 0.1
                                }} />

                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    sx={{
                                        fontWeight: 700,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1
                                    }}
                                >
                                    Performance Analysis {getFeedbackEmoji()}
                                </Typography>

                                <Box sx={{
                                    background: 'rgba(255,255,255,0.5)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: 3,
                                    p: 2,
                                    mb: 2,
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                                }}>
                                    <Typography
                                        variant="body1"
                                        paragraph
                                        sx={{
                                            fontWeight: 500,
                                            color: results.wpm > 60 ? '#2E7D32' : results.wpm > 40 ? '#0277BD' : '#616161'
                                        }}
                                    >
                                        {results.wpm > 60
                                            ? "Excellent typing speed! Your fingers are flying across the keyboard."
                                            : results.wpm > 40
                                                ? "Good typing speed. With more practice, you'll be even faster."
                                                : "Keep practicing to improve your typing speed."
                                        }
                                    </Typography>
                                </Box>

                                <Box sx={{
                                    background: 'rgba(255,255,255,0.5)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: 3,
                                    p: 2,
                                    mb: 2,
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                                }}>
                                    <Typography
                                        variant="body1"
                                        paragraph
                                        sx={{
                                            fontWeight: 500,
                                            color: results.accuracy > 95 ? '#2E7D32' : results.accuracy > 85 ? '#0277BD' : '#616161'
                                        }}
                                    >
                                        {results.accuracy > 95
                                            ? "Your accuracy is outstanding! Precision is just as important as speed."
                                            : results.accuracy > 85
                                                ? "Good accuracy. Focus on reducing errors to improve your score."
                                                : "Try to focus more on accuracy. Slow down if needed to make fewer mistakes."
                                        }
                                    </Typography>
                                </Box>

                                <Box sx={{
                                    background: 'rgba(255,255,255,0.2)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: 3,
                                    p: 2,
                                    border: '1px solid rgba(66,165,245,0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2
                                }}>
                                    <Box sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #42A5F5 0%, #1565C0 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        flexShrink: 0
                                    }}>
                                        <BoltIcon />
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontStyle: 'italic',
                                            color: '#333',
                                            fontWeight: 500
                                        }}
                                    >
                                        Continue practicing regularly to build muscle memory and improve both your speed and accuracy.
                                    </Typography>
                                </Box>
                            </Paper>

                            <Box sx={{ mt: 'auto' }}>
                                <Zoom in={animationStage >= 3} timeout={500}>
                                    <Box sx={{
                                        display: 'grid',
                                        gridTemplateColumns: {
                                            xs: '1fr',
                                            sm: '1fr 1fr 1fr'
                                        },
                                        gap: 2
                                    }}>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            sx={{
                                                py: 1.5,
                                                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                                                borderRadius: 3,
                                                boxShadow: '0 3px 10px rgba(33, 150, 243, 0.3)',
                                                '&:hover': {
                                                    background: 'linear-gradient(45deg, #1E88E5 30%, #00B0FF 90%)',
                                                    boxShadow: '0 4px 12px rgba(33, 150, 243, 0.4)',
                                                    transform: 'translateY(-2px)'
                                                },
                                                transition: 'all 0.2s ease'
                                            }}
                                            startIcon={<ReplayIcon />}
                                            onClick={onRestart}
                                        >
                                            Play Again
                                        </Button>

                                        <Button
                                            variant="contained"
                                            fullWidth
                                            sx={{
                                                py: 1.5,
                                                background: 'linear-gradient(45deg, #9C27B0 30%, #AB47BC 90%)',
                                                borderRadius: 3,
                                                boxShadow: '0 3px 10px rgba(156, 39, 176, 0.3)',
                                                '&:hover': {
                                                    background: 'linear-gradient(45deg, #8E24AA 30%, #BA68C8 90%)',
                                                    boxShadow: '0 4px 12px rgba(156, 39, 176, 0.4)',
                                                    transform: 'translateY(-2px)'
                                                },
                                                transition: 'all 0.2s ease'
                                            }}
                                            startIcon={<ShareIcon />}
                                        >
                                            Share Results
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            fullWidth
                                            sx={{
                                                py: 1.5,
                                                borderColor: 'rgba(0, 0, 0, 0.23)',
                                                borderRadius: 3,
                                                color: '#333',
                                                background: 'transparent',
                                                '&:hover': {
                                                    borderColor: 'rgba(0, 0, 0, 0.5)',
                                                    background: 'rgba(0, 0, 0, 0.02)',
                                                    transform: 'translateY(-2px)'
                                                },
                                                transition: 'all 0.2s ease'
                                            }}
                                            startIcon={<HomeIcon />}
                                            onClick={onExitGame}
                                        >
                                            Exit Game
                                        </Button>
                                    </Box>
                                </Zoom>
                            </Box>
                        </Box>
                    </Fade>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default GameResults;
