import { Box, Button } from '@mui/material';
import { Refresh } from '@mui/icons-material';

const ActionButtons = ({ isStarted, isFinished, startTest, resetTest }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
      {!isStarted && !isFinished && (
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={startTest}
          sx={{
            px: 4,
            py: 1.5,
            fontWeight: 'bold',
            fontSize: '1rem'
          }}
        >
          Start Typing
        </Button>
      )}

      {(isStarted || isFinished) && (
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<Refresh />}
          onClick={resetTest}
          sx={{ px: 3 }}
        >
          Reset
        </Button>
      )}
    </Box>
  );
};

export default ActionButtons;