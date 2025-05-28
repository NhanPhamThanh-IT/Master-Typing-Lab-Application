import { useState, lazy, Suspense } from 'react';
import { Container, Typography, Box, CircularProgress, Tabs, Tab } from '@mui/material';

// Lazy-loaded components
const GameSelection = lazy(() => import('@components/practice/TypingGames/GameSelection'));
const GameArea = lazy(() => import('@components/practice/TypingGames/GameArea'));
const GameInstructions = lazy(() => import('@components/practice/TypingGames/GameInstructions'));
const GameResults = lazy(() => import('@components/practice/TypingGames/GameResults'));

// Loading fallback component
const LoadingFallback = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '120px' }}>
        <CircularProgress />
    </Box>
);

/**
 * TypingGamesPage - The main page for playing typing games
 * Handles game selection, difficulty levels, and game state management
 */
const TypingGamesPage = () => {
    // State for game selection and management
    const [selectedGame, setSelectedGame] = useState(null);
    const [difficultyLevel, setDifficultyLevel] = useState('easy');
    const [isGameActive, setIsGameActive] = useState(false);
    const [isGameFinished, setIsGameFinished] = useState(false);
    const [gameResults, setGameResults] = useState(null);
    const [activeTab, setActiveTab] = useState(0);

    // Handle tab change
    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    // Handle game selection
    const handleGameSelect = (game) => {
        setSelectedGame(game);
        setIsGameFinished(false);
        setGameResults(null);
    };

    // Handle difficulty change
    const handleDifficultyChange = (level) => {
        setDifficultyLevel(level);
    };

    // Handle game start
    const handleGameStart = () => {
        setIsGameActive(true);
        setIsGameFinished(false);
    };

    // Handle game end
    const handleGameEnd = (results) => {
        setIsGameActive(false);
        setIsGameFinished(true);
        setGameResults(results);
    };

    // Handle game restart
    const handleGameRestart = () => {
        setIsGameActive(true);
        setIsGameFinished(false);
        setGameResults(null);
    };

    // Handle exit game
    const handleExitGame = () => {
        setSelectedGame(null);
        setIsGameActive(false);
        setIsGameFinished(false);
        setGameResults(null);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Typing Games
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Improve your typing skills with fun games
                </Typography>
            </Box>

            {!selectedGame ? (
                <Suspense fallback={<LoadingFallback />}>
                    <GameSelection onGameSelect={handleGameSelect} />
                </Suspense>
            ) : (
                <Box>
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        centered
                        sx={{ mb: 3 }}
                    >
                        <Tab label="Play Game" />
                        <Tab label="Instructions" />
                        {isGameFinished && <Tab label="Results" />}
                    </Tabs>

                    <Box hidden={activeTab !== 0}>
                        {!isGameFinished ? (
                            <Suspense fallback={<LoadingFallback />}>
                                <GameArea
                                    game={selectedGame}
                                    difficultyLevel={difficultyLevel}
                                    isGameActive={isGameActive}
                                    onDifficultyChange={handleDifficultyChange}
                                    onGameStart={handleGameStart}
                                    onGameEnd={handleGameEnd}
                                    onExitGame={handleExitGame}
                                />
                            </Suspense>
                        ) : (
                            <Suspense fallback={<LoadingFallback />}>
                                <GameResults
                                    results={gameResults}
                                    onRestart={handleGameRestart}
                                    onExitGame={handleExitGame}
                                />
                            </Suspense>
                        )}
                    </Box>

                    <Box hidden={activeTab !== 1}>
                        <Suspense fallback={<LoadingFallback />}>
                            <GameInstructions game={selectedGame} />
                        </Suspense>
                    </Box>

                    <Box hidden={activeTab !== 2}>
                        {isGameFinished && (
                            <Suspense fallback={<LoadingFallback />}>
                                <GameResults
                                    results={gameResults}
                                    onRestart={handleGameRestart}
                                    onExitGame={handleExitGame}
                                />
                            </Suspense>
                        )}
                    </Box>
                </Box>
            )}
        </Container>
    );
};

export default TypingGamesPage;