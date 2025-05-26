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

// Lazy load components to optimize performance
const Layout = lazy(() => import('./components/Layout'));
const HomePage = lazy(() => import('./pages/HomePage'));
const MainPage = lazy(() => import('./pages/MainPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Main App component that defines the routes
function App() {
  return (
    <Routes>
      <Route
        path="/"
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
          path="home"
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
          path="main"
          element={
            <Suspense fallback={
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
              </Box>
            }>
              <MainPage />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="*"
        element={<Navigate to="/404" replace />}
      />
      <Route
        path="/404"
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