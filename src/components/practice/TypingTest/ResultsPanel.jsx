import {
  Paper, Typography, Grid, Card, CardContent, Box, Button, CircularProgress
} from '@mui/material';
import { EmojiEvents, Speed, Timer, Refresh } from '@mui/icons-material';

const ResultsPanel = ({ wpm, accuracy, errorCount, duration, timer, mode, resetTest }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        mt: 4,
        p: 4,
        borderRadius: 2,
        background: 'linear-gradient(to right, #e0f7fa, #e8f5e9)'
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        color="primary"
        sx={{ fontWeight: 'bold', mb: 4 }}
      >
        <EmojiEvents color="primary" sx={{ mr: 1, fontSize: 35 }} />
        Your Results
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid size={{ xs: 12, sm: 4 }}>
          <Card
            elevation={2}
            sx={{
              height: '100%',
              textAlign: 'center',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.03)' }
            }}
          >
            <CardContent>
              <Speed color="primary" sx={{ fontSize: 40 }} />
              <Typography variant="h5" sx={{ mt: 2 }}>
                Typing Speed
              </Typography>
              <Typography variant="h3" color="primary.main" sx={{ fontWeight: 'bold', my: 2 }}>
                {wpm}
              </Typography>
              <Typography color="text.secondary">
                Words Per Minute
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <Card
            elevation={2}
            sx={{
              height: '100%',
              textAlign: 'center',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.03)' }
            }}
          >
            <CardContent>
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress
                  variant="determinate"
                  value={accuracy}
                  size={80}
                  thickness={5}
                  color={accuracy > 90 ? "success" : accuracy > 70 ? "warning" : "error"}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h6" component="div" color="text.secondary">
                    {`${accuracy}%`}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h5" sx={{ mt: 2 }}>
                Accuracy
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 2 }}>
                {accuracy > 90 ? "Excellent!" : accuracy > 70 ? "Good!" : "Keep practicing!"}
              </Typography>
              <Typography variant="caption" color="error" sx={{ display: 'block', mt: 1 }}>
                Errors: {errorCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <Card
            elevation={2}
            sx={{
              height: '100%',
              textAlign: 'center',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.03)' }
            }}
          >
            <CardContent>
              <Timer color="primary" sx={{ fontSize: 40 }} />
              <Typography variant="h5" sx={{ mt: 2 }}>
                Time
              </Typography>
              <Typography variant="h3" color="primary.main" sx={{ fontWeight: 'bold', my: 2 }}>
                {mode === 'time' ? duration : duration - timer}s
              </Typography>
              <Typography color="text.secondary">
                {mode === 'time' ? "Time Limit" : "Completion Time"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Refresh />}
          onClick={resetTest}
          sx={{ px: 4, py: 1.5, fontWeight: 'bold' }}
        >
          Practice Again
        </Button>
      </Box>
    </Paper>
  );
};

export default ResultsPanel;