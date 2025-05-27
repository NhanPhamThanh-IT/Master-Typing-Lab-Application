import { useState } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import TypingArea from '../components/typing/TypingArea';

const MainPage = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleReset = () => {
    setIsStarted(false);
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textAlign: 'center',
          fontWeight: 600,
          mb: 4
        }}
      >
        Typing Test
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, sm: 4 },
          borderRadius: 2,
          mb: 4
        }}
      >
        {!isStarted ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" gutterBottom>
              Ready to test your typing skills?
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Click the button below to start the typing test.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={handleStart}
              sx={{
                mt: 2,
                px: 4,
                py: 1,
                borderRadius: 2,
                fontSize: '1rem',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              Start
            </Button>
          </Box>
        ) : (
          <Box>
            <TypingArea onReset={handleReset} />
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default MainPage;