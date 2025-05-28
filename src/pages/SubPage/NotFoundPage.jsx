import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: '5rem', fontWeight: 700 }}>
        404
      </Typography>
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        The page you are looking for doesn't exist or has been moved.
      </Typography>
      <Button 
        component={RouterLink} 
        to="/" 
        variant="contained"
        sx={{ mt: 2 }}
      >
        Go Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;