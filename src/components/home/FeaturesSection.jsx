import {
  Container,
  Typography,
  Grid,
  Paper
} from '@mui/material';
import {
  TimerIcon,
  TrophyIcon,
  BarChartIcon
} from 'lucide-react';

/**
 * @component FeaturesSection
 * @description A visually appealing component that showcases the key features and benefits of the typing practice application.
 * This component displays three main features using cards with icons, headings, and descriptions in a responsive grid layout.
 * 
 * @features
 * - Gradient text heading with eye-catching design
 * - Three feature cards highlighting key benefits of the platform
 * - Interactive hover animations on feature cards for enhanced user engagement
 * - Responsive grid layout that adapts to different screen sizes
 * - Consistent visual hierarchy with iconography, headings, and descriptions
 * - Strategic use of color to emphasize different features
 * 
 * @visualElements
 * - Lucide React icons representing each feature (TimerIcon, TrophyIcon, BarChartIcon)
 * - Material UI Paper components with elevation and hover effects
 * - Gradient text effect on the main heading
 * - Consistent spacing and typography hierarchy
 * - Color-coded icons to differentiate features (blue, red, green)
 * 
 * @responsiveBehavior
 * - Single column layout on small screens (mobile)
 * - Three column layout on medium and larger screens
 * - Maintains consistent spacing and visual appeal across all devices
 * - Cards have equal height regardless of content length
 * 
 * @animationDetails
 * - TranslateY animation on hover moves cards upward for interactive feedback
 * - Shadow depth increases on hover to create elevation effect
 * - Smooth transitions with 0.3s duration for natural feel
 * 
 * @contentStructure
 * - Main heading ("Why Practice With Us?") with gradient styling
 * - Subtitle explaining the overall value proposition
 * - Three feature cards, each containing:
 *   - Thematic icon with color coding
 *   - Feature heading with emphasized typography
 *   - Descriptive text explaining the benefit in detail
 * 
 * @accessibilityConsiderations
 * - Proper heading structure for screen readers
 * - Sufficient color contrast between text and background
 * - Semantic HTML structure for better comprehension
 * - Interactive elements are visually distinguishable
 * 
 * @stylingApproach
 * - Utilizes Material UI's sx prop for component styling
 * - Consistent spacing using MUI's spacing system
 * - Custom transitions for interactive elements
 * - Typography variants applied consistently for hierarchy
 * - Strategic color usage for visual interest and emphasis
 * 
 * @usage
 * ```jsx
 * import FeaturesSection from '../components/home/FeaturesSection';
 * 
 * const HomePage = () => (
 *   <div>
 *     <HeroSection />
 *     <FeaturesSection />
 *     <OtherSections />
 *   </div>
 * );
 * ```
 * 
 * @returns {JSX.Element} A container with a heading and a grid of feature cards
 */

const FeaturesSection = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', mb: 10 }}>
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{
          fontWeight: 700,
          mb: 1,
          background: 'linear-gradient(45deg, #3f51b5 30%, #9c27b0 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Why Practice With Us?
      </Typography>

      <Typography variant="h6" sx={{ mb: 6, color: 'text.secondary' }}>
        Our platform provides everything you need to become a faster and more accurate typist
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper elevation={3} sx={{
            p: 4,
            height: '100%',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }
          }}>
            <TimerIcon size={50} style={{ marginBottom: '16px', color: '#3f51b5' }} />
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Improve Speed
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Track your typing speed in words per minute (WPM) and see how you improve over time with consistent practice.
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper elevation={3} sx={{
            p: 4,
            height: '100%',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }
          }}>
            <TrophyIcon size={50} style={{ marginBottom: '16px', color: '#f44336' }} />
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Increase Accuracy
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Reduce errors and type with confidence. Our real-time feedback helps you identify and correct mistakes immediately.
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper elevation={3} sx={{
            p: 4,
            height: '100%',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }
          }}>
            <BarChartIcon size={50} style={{ marginBottom: '16px', color: '#4caf50' }} />
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Track Progress
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Monitor your improvement with detailed statistics and personalized performance metrics to identify strengths and weaknesses.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeaturesSection;