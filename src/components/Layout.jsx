import { Outlet } from 'react-router-dom';
import { Box, Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { KeyboardIcon } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <KeyboardIcon style={{ marginRight: '8px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TypeMaster
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/main">
            Practice
          </Button>
        </Toolbar>
      </AppBar>

      <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Outlet />
      </Container>

      <Box component="footer" sx={{ py: 3, bgcolor: 'background.paper', textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} TypeMaster - Improve Your Typing Skills
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;