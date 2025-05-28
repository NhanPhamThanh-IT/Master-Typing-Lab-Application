import { useState, useEffect } from 'react';
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
    Fade
} from '@mui/material';
import {
    EmojiEvents as TrophyIcon,
    Speed as SpeedIcon,
    CheckCircle as AccuracyIcon,
    Timeline as StatsIcon,
    Replay as ReplayIcon,
    Home as HomeIcon,
    Share as ShareIcon
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

    // Animation effect when results are shown
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowResults(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    // If no results available
    if (!results) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    // Calculate performance level based on score and accuracy
    const getPerformanceLevel = () => {
        const { score, accuracy, wpm } = results;

        if (wpm > 80 && accuracy > 95) return { level: 'Master Typist', color: '#FFD700' };
        if (wpm > 60 && accuracy > 90) return { level: 'Expert', color: '#C0C0C0' };
        if (wpm > 40 && accuracy > 85) return { level: 'Proficient', color: '#CD7F32' };
        return { level: 'Apprentice', color: '#1976d2' };
    };

    const performance = getPerformanceLevel();

    return (
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Fade in={showResults} timeout={1000}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Game Results
                    </Typography>
                </Fade>
            </Box>

            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Fade in={showResults} timeout={1500}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            p: 2,
                            borderRadius: 2,
                            bgcolor: 'background.paper',
                            boxShadow: 1
                        }}>
                            <Avatar
                                sx={{
                                    width: 80,
                                    height: 80,
                                    bgcolor: performance.color,
                                    mb: 2
                                }}
                            >
                                <TrophyIcon sx={{ fontSize: 40 }} />
                            </Avatar>

                            <Typography variant="h5" gutterBottom>
                                {performance.level}
                            </Typography>

                            <Typography variant="h3" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
                                {results.score} pts
                            </Typography>

                            <Box sx={{ width: '100%', mt: 2 }}>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <SpeedIcon color="primary" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Typing Speed"
                                            secondary={`${results.wpm} WPM`}
                                            secondaryTypographyProps={{ fontSize: '1.1rem', fontWeight: 'medium' }}
                                        />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <AccuracyIcon color="success" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Accuracy"
                                            secondary={`${results.accuracy}%`}
                                            secondaryTypographyProps={{ fontSize: '1.1rem', fontWeight: 'medium' }}
                                        />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <StatsIcon color="secondary" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Time Spent"
                                            secondary={`${results.time} seconds`}
                                            secondaryTypographyProps={{ fontSize: '1.1rem', fontWeight: 'medium' }}
                                        />
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Fade>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Fade in={showResults} timeout={2000}>
                        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <Paper elevation={2} sx={{ p: 3, mb: 3, flexGrow: 1 }}>
                                <Typography variant="h6" gutterBottom>
                                    Performance Analysis
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {results.wpm > 60
                                        ? "Excellent typing speed! Your fingers are flying across the keyboard."
                                        : results.wpm > 40
                                            ? "Good typing speed. With more practice, you'll be even faster."
                                            : "Keep practicing to improve your typing speed."
                                    }
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {results.accuracy > 95
                                        ? "Your accuracy is outstanding! Precision is just as important as speed."
                                        : results.accuracy > 85
                                            ? "Good accuracy. Focus on reducing errors to improve your score."
                                            : "Try to focus more on accuracy. Slow down if needed to make fewer mistakes."
                                    }
                                </Typography>
                                <Typography variant="body1">
                                    Continue practicing regularly to build muscle memory and improve both your speed and accuracy.
                                </Typography>
                            </Paper>

                            <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    startIcon={<ReplayIcon />}
                                    onClick={onRestart}
                                >
                                    Play Again
                                </Button>

                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    fullWidth
                                    startIcon={<ShareIcon />}
                                >
                                    Share Results
                                </Button>

                                <Button
                                    variant="outlined"
                                    fullWidth
                                    startIcon={<HomeIcon />}
                                    onClick={onExitGame}
                                >
                                    Exit Game
                                </Button>
                            </Box>
                        </Box>
                    </Fade>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default GameResults;
