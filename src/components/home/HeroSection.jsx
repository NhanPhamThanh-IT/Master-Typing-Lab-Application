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

// Hero background image
import heroBackground from "@assets/home-hero-background.png";

// Hooks
import useLazyLoadImage from '@hooks/useLazyLoadImage';

/**
 * @component HeroSection
 * @description A visually striking full-screen hero section component that serves as the main landing area for the typing application.
 * This component features a dramatic background image with overlay, prominent call-to-action buttons, and responsive design.
 * 
 * @features
 * - Full-viewport height background with parallax-like effect
 * - Lazy-loaded background image with loading placeholder
 * - Dramatic gradient overlay to ensure text readability
 * - Responsive typography that scales with viewport size
 * - Call-to-action buttons with hover animations
 * - Text shadow effects for improved contrast against background
 * - Smooth transitions when background image loads
 * 
 * @visualElements
 * - Large hero background image with dark gradient overlay
 * - Prominent headline with bold typography
 * - Supporting subheader text explaining the application's purpose
 * - Primary CTA button with elevation and hover effects
 * - Secondary outlined button for additional navigation options
 * - Skeleton loading state when the background image is loading
 * 
 * @performance
 * - Implements lazy loading for the large background image
 * - Displays a lightweight gradient placeholder during image loading
 * - Uses skeleton animation to indicate loading state
 * - Optimizes transitions to prevent layout shifts
 * 
 * @responsiveBehavior
 * - Adapts typography size across different viewport widths
 * - Maintains proper spacing and proportions on mobile devices
 * - Adjusts content alignment and sizing for optimal display
 * - Ensures buttons remain accessible and properly sized on touch devices
 * 
 * @animation
 * - Subtle hover animations on buttons for interactive feedback
 * - Smooth transition when background image loads
 * - Elevation change on primary button hover
 * - Wave animation on skeleton loader during background image loading
 * 
 * @accessibilityFeatures
 * - Semantic heading structure for screen readers
 * - Sufficient contrast between text and background
 * - Proper button labeling for assistive technologies
 * - Keyboard navigation support through standard Router Link implementation
 * 
 * @implementationDetails
 * - Uses custom useLazyLoadImage hook for efficient image loading
 * - Implements conditional rendering based on image load state
 * - Leverages Material UI components for consistent styling
 * - Uses React Router for navigation through RouterLink component
 * 
 * @usage
 * ```jsx
 * import HeroSection from '../components/home/HeroSection';
 * 
 * const HomePage = () => (
 *   <div>
 *     <HeroSection />
 *     <OtherSections />
 *   </div>
 * );
 * ```
 * 
 * @returns {JSX.Element} A full-viewport hero section with background image, headline, and CTA buttons
 */

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