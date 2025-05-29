import {
    useState
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Button,
    Box,
    Chip,
    Avatar
} from '@mui/material';
import routePaths from '@constants/routePaths.js';
import {
    SportsEsports as GameIcon,
    Timer as TimerIcon,
    School as VocabIcon,
    Announcement as DangerIcon,
    FormatQuote as QuoteIcon
} from '@mui/icons-material';

// Game data
import { GAMES_DATA } from './constants';

/**
 * GameSelection - Component for displaying and selecting typing games
 * Navigates to individual game pages when a game is selected
 */
const GameSelection = () => {
    const [hoveredGame, setHoveredGame] = useState(null);
    const navigate = useNavigate();
    
    // Handle direct game navigation
    const handleGameClick = (game) => {
        // Navigate to the specific game page based on game.id
        switch (game.id) {
            case 'word-master':
                navigate(`${routePaths.practice}/${routePaths.typingGames}/${routePaths.games.wordMaster}`);
                break;
            case 'time-attack':
                navigate(`${routePaths.practice}/${routePaths.typingGames}/${routePaths.games.timeAttack}`);
                break;
            case 'bomb-defuser':
                navigate(`${routePaths.practice}/${routePaths.typingGames}/${routePaths.games.bombDefuser}`);
                break;
            case 'punctuation-pro':
                navigate(`${routePaths.practice}/${routePaths.typingGames}/${routePaths.games.punctuationPro}`);
                break;
            default:
                navigate(`${routePaths.practice}/${routePaths.typingGames}`);
        }
    };

    return (
        <Box>
            <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3, textAlign: 'center' }}>
                Choose a Game
            </Typography>

            <Grid container spacing={3}>
                {GAMES_DATA.map((game) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={game.id}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: 6,
                                }
                            }}
                            onMouseEnter={() => setHoveredGame(game.id)}
                            onMouseLeave={() => setHoveredGame(null)}
                        >
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={game.imageUrl || `https://source.unsplash.com/random/300x140/?typing,${game.id}`}
                                    alt={game.title}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 10,
                                        right: 10,
                                        display: 'flex',
                                        gap: 0.5,
                                    }}
                                >
                                    {game.difficulty.map((level) => (
                                        <Chip
                                            key={level}
                                            label={level}
                                            size="small"
                                            variant="filled"
                                            sx={{
                                                backgroundColor: level === 'easy'
                                                    ? 'success.light'
                                                    : level === 'medium'
                                                        ? 'warning.light'
                                                        : 'error.light',
                                                color: 'white',
                                                border: '2px solid',
                                                borderColor:
                                                    level === 'easy'
                                                        ? 'success.main'
                                                        : level === 'medium'
                                                            ? 'warning.main'
                                                            : 'error.main',
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <Avatar sx={{ bgcolor: game.iconBg || 'primary.main', mr: 1 }}>
                                        {game.icon === 'vocab' && <VocabIcon />}
                                        {game.icon === 'time' && <TimerIcon />}
                                        {game.icon === 'danger' && <DangerIcon />}
                                        {game.icon === 'quote' && <QuoteIcon />}
                                        {(!game.icon || game.icon === 'game') && <GameIcon />}
                                    </Avatar>
                                    <Typography variant="h6" component="h3">
                                        {game.title}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary">
                                    {game.description}
                                </Typography>
                            </CardContent>
                            <CardActions>                                <Button
                                    size="medium"
                                    variant={hoveredGame === game.id ? "contained" : "outlined"}
                                    fullWidth
                                    onClick={() => handleGameClick(game)}
                                >
                                    Play Now
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default GameSelection;
