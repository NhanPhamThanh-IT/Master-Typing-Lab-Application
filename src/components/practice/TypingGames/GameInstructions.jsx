import { Box, Typography, Paper, Divider, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import {
    Keyboard as KeyboardIcon,
    EmojiEvents as TrophyIcon,
    Warning as WarningIcon,
    CheckCircle as TipIcon,
    ExtensionOutlined as GameRulesIcon
} from '@mui/icons-material';

/**
 * GameInstructions - Shows instructions for the selected game
 * 
 * @param {Object} props - Component properties
 * @param {Object} props.game - The selected game data
 */
const GameInstructions = ({ game }) => {
    // If no game is selected
    if (!game) {
        return (
            <Box sx={{ textAlign: 'center', p: 4 }}>
                <Typography variant="h6">Please select a game first</Typography>
            </Box>
        );
    }

    return (
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                <GameRulesIcon sx={{ fontSize: 30, mr: 1, color: 'primary.main' }} />
                <Typography variant="h4" component="h2">
                    How to Play: {game.title}
                </Typography>
            </Box>

            <Divider sx={{ mb: 3 }} />

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                    Game Description
                </Typography>
                <Typography variant="body1">
                    {game.longDescription || game.description}
                </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                    <KeyboardIcon sx={{ mr: 1 }} /> Controls
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="Type the words/text as they appear on the screen" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Press Space to submit a word (in word games)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Press Esc to pause the game" />
                    </ListItem>
                </List>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                    <TrophyIcon sx={{ mr: 1, color: 'warning.main' }} /> Scoring System
                </Typography>
                <List>
                    {game.scoringRules && game.scoringRules.map((rule, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={rule} />
                        </ListItem>
                    ))}
                    {!game.scoringRules && (
                        <>
                            <ListItem>
                                <ListItemText primary="Correctly typed characters earn points" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Bonus points for maintaining accuracy above 90%" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Time bonuses awarded for quick completions" />
                            </ListItem>
                        </>
                    )}
                </List>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                    <WarningIcon sx={{ mr: 1, color: 'error.main' }} /> Difficulty Levels
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    {game.difficulty.map((level) => (
                        <Chip
                            key={level}
                            label={level.charAt(0).toUpperCase() + level.slice(1)}
                            color={
                                level === 'easy'
                                    ? 'success'
                                    : level === 'medium'
                                        ? 'warning'
                                        : 'error'
                            }
                        />
                    ))}
                </Box>
                <List>
                    {game.difficultyDetails && game.difficultyDetails.map((detail, index) => (
                        <ListItem key={index}>
                            <ListItemText
                                primary={`${detail.level.toUpperCase()}: ${detail.description}`}
                            />
                        </ListItem>
                    ))}
                    {!game.difficultyDetails && (
                        <>
                            <ListItem>
                                <ListItemText primary="EASY: Shorter words, longer time limits, more forgiving scoring" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="MEDIUM: Mix of words, moderate time pressure, standard scoring" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="HARD: Complex words, tight time limits, strict scoring" />
                            </ListItem>
                        </>
                    )}
                </List>
            </Box>

            <Box>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                    <TipIcon sx={{ mr: 1, color: 'success.main' }} /> Pro Tips
                </Typography>
                <List>
                    {game.tips && game.tips.map((tip, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <TipIcon color="success" />
                            </ListItemIcon>
                            <ListItemText primary={tip} />
                        </ListItem>
                    ))}
                    {!game.tips && (
                        <>
                            <ListItem>
                                <ListItemIcon>
                                    <TipIcon color="success" />
                                </ListItemIcon>
                                <ListItemText primary="Focus on accuracy over speed initially" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <TipIcon color="success" />
                                </ListItemIcon>
                                <ListItemText primary="Keep your fingers on the home row (ASDF-JKL;)" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <TipIcon color="success" />
                                </ListItemIcon>
                                <ListItemText primary="Look at the screen, not your keyboard" />
                            </ListItem>
                        </>
                    )}
                </List>
            </Box>
        </Paper>
    );
};

export default GameInstructions;
