import { useState, lazy, Suspense, useEffect } from 'react';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routePaths from '@constants/routePaths';

// Lazy-loaded components
const GameArea = lazy(() => import('@components/practice/TypingGames/GameArea'));
const GameInstructions = lazy(() => import('@components/practice/TypingGames/GameInstructions'));
const GameResults = lazy(() => import('@components/practice/TypingGames/GameResults'));

// Game data
import { GAMES_DATA } from '@components/practice/TypingGames/constants';

// Loading fallback component
const LoadingFallback = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '120px' }}>
        <CircularProgress />
    </Box>
);

/**
 * BombDefuserPage - Page for playing the Bomb Defuser typing game
 */
const BombDefuserPage = () => {
    // State for game management
    const [difficultyLevel, setDifficultyLevel] = useState('medium');
    const [isGameActive, setIsGameActive] = useState(false);
    const [isGameFinished, setIsGameFinished] = useState(false);
    const [gameResults, setGameResults] = useState(null);
    const [showInstructions, setShowInstructions] = useState(false);

    const navigate = useNavigate();
    
    // Get the game data
    const game = GAMES_DATA.find(game => game.id === 'bomb-defuser');

    // Handle difficulty change
    const handleDifficultyChange = (level) => {
        setDifficultyLevel(level);
    };

    // Handle game start
    const handleGameStart = () => {
        setIsGameActive(true);
        setIsGameFinished(false);
        setShowInstructions(false);
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
        // Navigate back to the main typing games page
        navigate(`${routePaths.practice}/${routePaths.typingGames}`);
    };

    // Toggle instructions view
    const toggleInstructions = () => {
        setShowInstructions(prev => !prev);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box>
                {showInstructions ? (
                    <Box>
                        <Typography variant="h4" gutterBottom align="center">Game Instructions</Typography>
                        <Suspense fallback={<LoadingFallback />}>
                            <GameInstructions game={game} />
                        </Suspense>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                            <Typography 
                                variant="button" 
                                color="primary" 
                                onClick={toggleInstructions}
                                sx={{ cursor: 'pointer', textDecoration: 'underline' }}
                            >
                                Back to Game
                            </Typography>
                        </Box>
                    </Box>
                ) : isGameFinished ? (
                    <Suspense fallback={<LoadingFallback />}>
                        <GameResults
                            results={gameResults}
                            onRestart={handleGameRestart}
                            onExitGame={handleExitGame}
                        />
                    </Suspense>
                ) : (
                    <Suspense fallback={<LoadingFallback />}>
                        <GameArea
                            game={game}
                            difficultyLevel={difficultyLevel}
                            isGameActive={isGameActive}
                            onDifficultyChange={handleDifficultyChange}
                            onGameStart={handleGameStart}
                            onGameEnd={handleGameEnd}
                            onExitGame={handleExitGame}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                            <Typography 
                                variant="button" 
                                color="primary" 
                                onClick={toggleInstructions}
                                sx={{ cursor: 'pointer', textDecoration: 'underline' }}
                            >
                                View Instructions
                            </Typography>
                        </Box>
                    </Suspense>
                )}
            </Box>
        </Container>
    );
};

export default BombDefuserPage;
