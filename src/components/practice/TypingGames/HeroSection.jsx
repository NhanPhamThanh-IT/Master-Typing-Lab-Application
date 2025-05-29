import {
    Box,
    Typography,
    Grid,
    Button,
    Container,
    useTheme,
    useMediaQuery
} from '@mui/material';
import {
    useRef
} from 'react';

const HeroSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const scrollTargetRef = useRef(null); const handleButtonClick = (e) => {
        e.preventDefault();
        window.scrollBy({
            top: 475,
            behavior: 'smooth'
        });
    };

    return (<Box
        sx={{
            mb: 6,
            py: 4,
            px: { xs: 2, md: 4 },
            background: 'linear-gradient(135deg, #d1d9ff 0%, #ffffff 100%)',
            borderRadius: 4,
            boxShadow: 3,
            overflow: 'hidden',
        }}
    >
        <Container maxWidth="xl">
            <Grid container spacing={3} alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
                {/* Left column - Image */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            height: { md: '250px' }
                        }}
                    >
                        <Box
                            component="img" src="https://howdoihomeschool.com/wp-content/uploads/2020/04/Free-typing-games.jpg"
                            alt="Typing Games Hero"
                            sx={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                                filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.2))',
                            }} onError={(e) => {
                                e.target.onerror = null;
                                e.target.style.display = 'none'; e.target.parentElement.style.background = 'linear-gradient(135deg, #3f51b5 0%, #7986cb 100%)';
                                e.target.parentElement.style.borderRadius = '12px';
                            }} />
                        <Box
                            sx={{
                                position: 'absolute',
                                width: 60,
                                height: 60,
                                borderRadius: '50%', background: 'rgba(63, 81, 181, 0.3)',
                                top: '10%',
                                left: '10%',
                                animation: 'pulse 3s infinite',
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                width: 40,
                                height: 40,
                                borderRadius: '50%', background: 'rgba(48, 63, 159, 0.3)',
                                bottom: '15%',
                                right: '15%',
                                animation: 'pulse 2.5s infinite 0.5s',
                            }}
                        />
                    </Box>
                </Grid>

                {/* Right column - Content */}
                <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="h3"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: 800,
                            background: 'linear-gradient(90deg, #3f51b5, #303f9f)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontFamily: 'monospace',
                        }}
                    >
                        Typing Games
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{ mb: 4, color: 'text.secondary', textAlign: { xs: 'center', md: 'justify' } }}
                    >
                        Master speed, accuracy and special characters through engaging typing games. Choose your difficulty level and track your progress with detailed performance metrics.
                    </Typography>                            <Button
                        variant="contained"
                        size="large"
                        href="/practice/typing-games"
                        onClick={handleButtonClick}
                        sx={{
                            textTransform: 'none',
                            fontWeight: 600,
                            padding: '12px 24px',
                            fontSize: '1rem',
                            boxShadow: 3,
                            backgroundColor: '#3f51b5',
                            '&:hover': {
                                boxShadow: 6,
                                backgroundColor: '#303f9f',
                            },
                        }}
                    >
                        Start Playing
                    </Button>
                </Grid>
            </Grid>
        </Container>
    </Box>
    );
};

export default HeroSection;
