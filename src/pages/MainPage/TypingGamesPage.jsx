import { useState, lazy, Suspense } from 'react';
import { Container, Box, CircularProgress } from '@mui/material';

// Lazy-loaded components
const HeroSection = lazy(() => import('@components/practice/TypingGames/HeroSection'));
const GameSelection = lazy(() => import('@components/practice/TypingGames/GameSelection'));

// Loading fallback component
const LoadingFallback = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '120px' }}>
        <CircularProgress />
    </Box>
);

/**
 * TypingGamesPage - The main page for selecting typing games
 * This page displays available games with links to their individual pages
 */
const TypingGamesPage = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Suspense fallback={<LoadingFallback />}>
                <HeroSection />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
                <GameSelection />
            </Suspense>
        </Container>
    );
};

export default TypingGamesPage;