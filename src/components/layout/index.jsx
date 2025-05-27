/**
 * @fileoverview Main layout component for the Typing Test Application.
 * This component serves as the application's primary layout wrapper providing
 * consistent structure across all pages. It includes:
 * - A lazily loaded header component at the top
 * - A main content area that renders child routes via React Router's Outlet
 * - A lazily loaded footer component at the bottom
 * 
 * The layout uses a flex column design to ensure the footer stays at the bottom
 * regardless of content height, and implements loading states for asynchronously 
 * loaded components.
 * 
 * @module components/layout
 * @requires react
 * @requires react-router-dom
 * @requires @mui/material
 * @requires ./Header/index
 * @requires ./Footer/index
 */

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

/**
 * Lazily loaded Header component to improve initial page load performance
 * @type {React.LazyExoticComponent<React.ComponentType>}
 */
const Header = lazy(() => import('./Header/index'));

/**
 * Lazily loaded Footer component to improve initial page load performance
 * @type {React.LazyExoticComponent<React.ComponentType>}
 */
const Footer = lazy(() => import('./Footer/index'));

/**
 * Layout component that provides the main application structure.
 * Wraps child routes with consistent header and footer while managing
 * loading states for these components.
 * 
 * @component
 * @returns {JSX.Element} A layout component with header, content area, and footer
 * 
 * @example
 * // In a router configuration
 * <Route path="/" element={<Layout />}>
 *   <Route index element={<HomePage />} />
 *   <Route path="practice" element={<PracticePage />} />
 * </Route>
 */
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