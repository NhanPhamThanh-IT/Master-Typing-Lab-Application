import {
  Outlet
} from 'react-router-dom';
import {
  Box,
  CircularProgress
} from '@mui/material';
import {
  lazy,
  Suspense
} from 'react';

// Custom components
const Header = lazy(() => import('./Header/index'));
const Footer = lazy(() => import('./Footer/index'));

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Suspense fallback={
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      }>
        <Header />
      </Suspense>

      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      <Suspense fallback={
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      }>
        <Footer />
      </Suspense>
    </Box>
  );
};

export default Layout;