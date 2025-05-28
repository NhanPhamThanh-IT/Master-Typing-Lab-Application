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
import routePaths from '@constants/routePaths.js';

// Lazy loaded layout components to improve initial page load performance
const GeneralLayout = lazy(() => import('@components/layout/GeneralLayout'));
const PracticeLayout = lazy(() => import('@components/layout/PracticeLayout'));

// Lazy loaded main pages for the application
const HomePage = lazy(() => import('@pages/MainPage/HomePage'));
const TypingTestPage = lazy(() => import('@pages/MainPage/TypingTestPage'));
const TypingLessonsPage = lazy(() => import('@pages/MainPage/TypingLessonsPage'));
const TypingGamesPage = lazy(() => import('@pages/MainPage/TypingGamesPage'));
const ContactPage = lazy(() => import('@pages/MainPage/ContactPage'));

// Lazy loaded sub-pages for the application
const NotFoundPage = lazy(() => import('@pages/SubPage/NotFoundPage'));
const PrivacyPolicyPage = lazy(() => import('@pages/SubPage/PrivacyPolicyPage'));
const TermsOfUsePage = lazy(() => import('@pages/SubPage/TermsOfUsePage'));

// Loading fallback component to avoid repetition
const LoadingFallback = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <CircularProgress />
  </Box>
);

// Main App component that defines the routes
function App() {
  return (
    <Routes>
      {/* General Layout Routes */}
      <Route
        path={routePaths.index}
        element={
          <Suspense fallback={<LoadingFallback />}>
            <GeneralLayout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<LoadingFallback />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path={routePaths.home}
          element={
            <Suspense fallback={<LoadingFallback />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path={routePaths.contactUs}
          element={
            <Suspense fallback={<LoadingFallback />}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path={routePaths.privacyPolicy}
          element={
            <Suspense fallback={<LoadingFallback />}>
              <PrivacyPolicyPage />
            </Suspense>
          }
        />
        <Route
          path={routePaths.termsOfUse}
          element={
            <Suspense fallback={<LoadingFallback />}>
              <TermsOfUsePage />
            </Suspense>
          }
        />
      </Route>

      {/* Practice Layout Routes */}
      <Route
        path={routePaths.practice}
        element={
          <Suspense fallback={<LoadingFallback />}>
            <PracticeLayout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<LoadingFallback />}>
              <TypingTestPage />
            </Suspense>
          }
        />
        <Route
          path={routePaths.typingTest}
          element={
            <Suspense fallback={<LoadingFallback />}>
              <TypingTestPage />
            </Suspense>
          }
        />
        <Route
          path={routePaths.typingLessons}
          element={
            <Suspense fallback={<LoadingFallback />}>
              <TypingLessonsPage />
            </Suspense>
          }
        />
        <Route
          path={routePaths.typingGames}
          element={
            <Suspense fallback={<LoadingFallback />}>
              <TypingGamesPage />
            </Suspense>
          }
        />
      </Route>

      {/* Not Found Routes */}
      <Route
        path={routePaths.notFound}
        element={
          <Suspense fallback={<LoadingFallback />}>
            <NotFoundPage />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={<Navigate to={routePaths.notFound} replace />}
      />
    </Routes>
  );
}

export default App;