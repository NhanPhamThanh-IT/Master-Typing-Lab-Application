import {
    Box,
    Typography,
    Button,
    Grid,
    Container,
    Skeleton
} from '@mui/material';
import {
    Link as RouterLink
} from 'react-router-dom';
import { useState, useEffect } from 'react';

// Hero background image
import heroBackground from "@assets/home-hero-background.png";

// Custom hook for lazy loading images
const useLazyLoadImage = (src) => {
    const [sourceLoaded, setSourceLoaded] = useState(null);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setSourceLoaded(src);
    }, [src]);

    return sourceLoaded;
};

const HeroSection = () => {
    const loadedImage = useLazyLoadImage(heroBackground);

    return (
        <Box
            sx={{
                position: 'relative',
                height: '90vh',
                display: 'flex',
                alignItems: 'center',
                backgroundImage: loadedImage
                    ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${loadedImage})`
                    : 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                mb: 8,
                transition: 'background-image 0.5s ease-in',
            }}
        >
            {!loadedImage && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Skeleton
                        variant="rectangular"
                        width="100%"
                        height="100%"
                        animation="wave"
                        sx={{
                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                            position: 'absolute'
                        }}
                    />
                </Box>
            )}
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography
                            variant="h1"
                            component="h1"
                            gutterBottom
                            sx={{
                                fontWeight: 800,
                                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                            }}
                        >
                            Master Your Typing Skills
                        </Typography>

                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{
                                mb: 4,
                                maxWidth: '700px',
                                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                            }}
                        >
                            Improve your speed, accuracy, and overall typing proficiency with our interactive typing tests and exercises.
                        </Typography>

                        <Button
                            component={RouterLink}
                            to="/practice"
                            variant="contained"
                            size="large"
                            sx={{
                                mt: 2,
                                mr: 2,
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                borderRadius: 2,
                                bgcolor: 'primary.main',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.4)',
                                    bgcolor: 'primary.dark',
                                },
                                transition: 'all 0.2s',
                                textTransform: 'none',
                            }}
                        >
                            Start Typing Now
                        </Button>

                        <Button
                            component={RouterLink}
                            to="/about"
                            variant="outlined"
                            size="large"
                            sx={{
                                mt: 2,
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                borderRadius: 2,
                                color: 'white',
                                borderColor: 'white',
                                '&:hover': {
                                    borderColor: 'white',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                },
                                textTransform: 'none',
                            }}
                        >
                            Learn More
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;