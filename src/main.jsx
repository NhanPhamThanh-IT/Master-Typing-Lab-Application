/**
 * Entry Point - main.jsx
 *
 * This file bootstraps the React application by rendering the root component
 * into the DOM. It sets up the following providers and wrappers:
 *
 * - React StrictMode: Highlights potential problems in an application.
 * - BrowserRouter: Enables client-side routing using react-router-dom.
 * - ThemeProvider: Applies the custom Material-UI theme to the application.
 * - CssBaseline: Provides a consistent baseline for CSS across browsers.
 *
 * Dependencies:
 * - react: React library for building user interfaces.
 * - react-dom/client: Provides the createRoot API for concurrent mode.
 * - react-router-dom: BrowserRouter for routing.
 * - @mui/material: ThemeProvider and CssBaseline for Material-UI theming.
 * - App: The root application component containing routes and layout.
 * - theme: Custom Material-UI theme configuration.
 *
 * Usage:
 * This file is executed by the bundler (Vite) at application startup and
 * mounts the React component tree into the HTML element with id "root".
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import App from './App';
import theme from './theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);