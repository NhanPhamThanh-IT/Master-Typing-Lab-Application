/**
 * App Component
 *
 * The root routing component for the Typing Test Application, responsible for defining
 * the client-side navigation structure and optimizing performance through route-based
 * code-splitting.
 *
 * Route Configuration:
 * - GeneralLayout (path: `/` and `/home`):
 *     • Index route (`/`): Renders <HomePage>.
 *     • `/contact`: Renders <ContactPage>.
 *     • `/privacy-policy`: Renders <PrivacyPolicyPage>.
 *     • `/terms-of-use`: Renders <TermsOfUsePage>.
 *
 * - PracticeLayout (path: `/practice`):
 *     • Index route (`/practice`): Renders <TypingTestPage>.
 *     • `/practice/typing-test`: Renders <TypingTestPage> (duplicate index for clarity).
 *     • `/practice/typing-lessons`: Renders <TypingLessonsPage>.
 *     • `/practice/typing-games`:
 *         - Index: Renders <TypingGamesPage>.
 *         - `/word-master`: Renders <WordMasterPage>.
 *         - `/time-attack`: Renders <TimeAttackPage>.
 *         - `/bomb-defuser`: Renders <BombDefuserPage>.
 *         - `/punctuation-pro`: Renders <PunctuationProPage>.
 *
 * - Catch-All:
 *     • `*`: Redirects to `/not-found`, rendering <NotFoundPage>.
 *
 * Lazy Loading & Fallback:
 * - Uses React.lazy() to dynamically import layouts and pages.
 * - Wraps each import in <Suspense> with <LoadingFallback> showing a centered spinner.
 *
 * Performance Benefits:
 * - Reduces initial bundle size by splitting code at route boundaries.
 * - Improves Time to Interactive (TTI) by loading only necessary chunks.
 *
 * Dependencies:
 * - React: Suspense, lazy, core library.
 * - react-router-dom: Routes, Route, Navigate for declarative routing.
 * - @mui/material: Box, CircularProgress for the loading UI.
 * - routePaths: Central path constants imported from @constants/routePaths.js.
 *
 * Integration:
 * - Rendered in main.jsx within BrowserRouter and ThemeProvider (Material-UI) contexts.
 */

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

// Lazy loaded game pages
const WordMasterPage = lazy(() => import('@pages/MainPage/GamePages/WordMasterPage'));
const TimeAttackPage = lazy(() => import('@pages/MainPage/GamePages/TimeAttackPage'));
const BombDefuserPage = lazy(() => import('@pages/MainPage/GamePages/BombDefuserPage'));
const PunctuationProPage = lazy(() => import('@pages/MainPage/GamePages/PunctuationProPage'));

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
        <Route path={routePaths.typingGames}>
          <Route
            index
            element={
              <Suspense fallback={<LoadingFallback />}>
                <TypingGamesPage />
              </Suspense>
            }
          />
          <Route
            path={routePaths.games.wordMaster}
            element={
              <Suspense fallback={<LoadingFallback />}>
                <WordMasterPage />
              </Suspense>
            }
          />
          <Route
            path={routePaths.games.timeAttack}
            element={
              <Suspense fallback={<LoadingFallback />}>
                <TimeAttackPage />
              </Suspense>
            }
          />
          <Route
            path={routePaths.games.bombDefuser}
            element={
              <Suspense fallback={<LoadingFallback />}>
                <BombDefuserPage />
              </Suspense>
            }
          />
          <Route
            path={routePaths.games.punctuationPro}
            element={
              <Suspense fallback={<LoadingFallback />}>
                <PunctuationProPage />
              </Suspense>
            }
          />
        </Route>
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