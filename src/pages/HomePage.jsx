import { Box, Typography, Button, Paper, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { TimerIcon, TrophyIcon, BarChartIcon } from 'lucide-react';

const HomePage = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography 
        variant="h2" 
        component="h1" 
        gutterBottom
        sx={{ 
          fontWeight: 700, 
          mb: 4,
          background: 'linear-gradient(45deg, #3f51b5 30%, #9c27b0 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Master Your Typing Skills
      </Typography>
      
      <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
        Practice makes perfect. Start your typing journey today!
      </Typography>
      
      <Button
        component={RouterLink}
        to="/main"
        variant="contained"
        size="large"
        sx={{ 
          mb: 6,
          px: 4,
          py: 1.5,
          fontSize: '1.1rem',
          borderRadius: 2,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
          },
          transition: 'all 0.2s',
        }}
      >
        Start Typing
      </Button>
      
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-5px)' } }}>
            <TimerIcon size={40} style={{ marginBottom: '16px', color: '#3f51b5' }} />
            <Typography variant="h6" gutterBottom>
              Improve Speed
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Track your typing speed and see how you improve over time with consistent practice.
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-5px)' } }}>
            <TrophyIcon size={40} style={{ marginBottom: '16px', color: '#f44336' }} />
            <Typography variant="h6" gutterBottom>
              Increase Accuracy
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Reduce errors and type with confidence. Our real-time feedback helps you correct mistakes.
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-5px)' } }}>
            <BarChartIcon size={40} style={{ marginBottom: '16px', color: '#4caf50' }} />
            <Typography variant="h6" gutterBottom>
              Track Progress
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Monitor your improvement with detailed statistics and performance metrics.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;