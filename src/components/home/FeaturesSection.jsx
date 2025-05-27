import { Container, Typography, Grid, Paper } from '@mui/material';
import { TimerIcon, TrophyIcon, BarChartIcon } from 'lucide-react';

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