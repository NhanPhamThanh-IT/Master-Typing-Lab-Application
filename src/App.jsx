import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import {
  lazy,
  Suspense
} from 'react';
import {
  Box,
  CircularProgress
} from '@mui/material';

// routePaths constants
import routePaths from '@constants/routePaths'

// Lazy load components to optimize performance
const Layout = lazy(() => import('@components/Layout'));
const HomePage = lazy(() => import('@pages/HomePage'));
const PracticePage = lazy(() => import('@pages/PracticePage'));
const ContactPage = lazy(() => import('@pages/ContactPage'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));

// Main App component that defines the routes
function App() {
  return (
    <Routes>
      <Route
        path={routePaths.index}
        element={
          <Suspense fallback={
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <CircularProgress />
            </Box>
          }>
            <Layout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
              </Box>
            }>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path={routePaths.home}
          element={
            <Suspense fallback={
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
              </Box>
            }>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path={routePaths.practice}
          element={
            <Suspense fallback={
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
              </Box>
            }>
              <PracticePage />
            </Suspense>
          }
        />
        <Route
          path={routePaths.contactUs}
          element={
            <Suspense fallback={
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
              </Box>
            }>
              <ContactPage />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="*"
        element={<Navigate to={routePaths.notFound} replace />}
      />
      <Route
        path={routePaths.notFound}
        element={
          <Suspense fallback={
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <CircularProgress />
            </Box>
          }>
            <NotFoundPage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;