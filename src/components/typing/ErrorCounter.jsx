import { Box, Typography } from '@mui/material';

const ErrorCounter = ({ count }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
        Errors:
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 'bold',
          color: count > 0 ? 'error.main' : 'success.main',
        }}
      >
        {count}
      </Typography>
    </Box>
  );
};

export default ErrorCounter;