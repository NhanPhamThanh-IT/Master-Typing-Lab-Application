import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Container, Typography, Paper, Box, CircularProgress } from '@mui/material';

// Lazy-loaded components with corrected paths
const PracticeSettings = lazy(() => import('@components/practice/TypingTest/PracticeSettings'));
const StatsBar = lazy(() => import('@components/practice/TypingTest/StatsBar'));
const TextDisplay = lazy(() => import('@components/practice/TypingTest/TextDisplay'));
const TypingArea = lazy(() => import('@components/practice/TypingTest/TypingArea'));
const ActionButtons = lazy(() => import('@components/practice/TypingTest/ActionButtons'));
const ResultsPanel = lazy(() => import('@components/practice/TypingTest/ResultsPanel'));

// Loading fallback component
const LoadingFallback = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '120px' }}>
        <CircularProgress />
    </Box>
);

const PracticePage = () => {
    const [level, setLevel] = useState('beginner');
    const [mode, setMode] = useState('time');
    const [duration, setDuration] = useState(60);
    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [currentText, setCurrentText] = useState('');
    const [userInput, setUserInput] = useState('');
    const [timer, setTimer] = useState(0);
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(100);
    const [timerInterval, setTimerInterval] = useState(null);
    const [errorCount, setErrorCount] = useState(0);
    const [totalKeysPressed, setTotalKeysPressed] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const inputRef = useRef(null);

    // Sample texts for different levels
    const sampleTexts = {
        beginner: "The quick brown fox jumps over the lazy dog. Simple words help build typing confidence. Learning to type is an essential skill for everyone.",
        intermediate: "Programming requires attention to detail. Syntax errors can be difficult to spot sometimes. Practice makes perfect! Developing software involves multiple disciplines.",
        advanced: "The complexity of algorithms often correlates with execution time. Efficient code optimizes resource utilization while maintaining readability. Understanding Big O notation helps developers make informed decisions."
    };

    useEffect(() => {
        setCurrentText(sampleTexts[level]);
        return () => {
            if (timerInterval) clearInterval(timerInterval);
        };
    }, [level, timerInterval]);

    // Tính toán WPM theo thời gian thực
    useEffect(() => {
        if (isStarted && userInput.length > 0) {
            calculateLiveMetrics();
        }
    }, [userInput, timer, isStarted]);

    const handleLevelChange = (e) => {
        setLevel(e.target.value);
        resetTest();
    };

    const handleModeChange = (e) => {
        setMode(e.target.value);
        resetTest();
    };

    const handleDurationChange = (e) => {
        setDuration(e.target.value);
        resetTest();
    };

    const startTest = () => {
        setIsStarted(true);
        setIsFinished(false);
        setUserInput('');
        setTimer(duration);
        setWpm(0);
        setAccuracy(100);
        setErrorCount(0);
        setTotalKeysPressed(0);
        setStartTime(Date.now());

        if (inputRef.current) {
            inputRef.current.focus();
        }

        // Start countdown timer
        const interval = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer <= 1) {
                    clearInterval(interval);
                    finishTest();
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);

        setTimerInterval(interval);
    };

    const finishTest = () => {
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        setIsFinished(true);
        setIsStarted(false);
        calculateFinalResults();
    };

    const resetTest = () => {
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        setIsStarted(false);
        setIsFinished(false);
        setUserInput('');
        setTimer(duration);
        setWpm(0);
        setAccuracy(100);
        setErrorCount(0);
        setTotalKeysPressed(0);
    };

    // Xử lý khi người dùng nhập ký tự - chỉ chấp nhận ký tự đúng
    const handleKeyDown = (e) => {
        if (!isStarted || isFinished) return;

        const currentPosition = userInput.length;

        if (currentPosition >= currentText.length) {
            finishTest();
            return;
        }

        // Tăng tổng số lần nhấn phím
        setTotalKeysPressed(prev => prev + 1);

        // Nếu nhấn phím Backspace, cho phép xóa ký tự cuối
        if (e.key === 'Backspace') {
            return; // Cho phép hành vi mặc định của Backspace
        }

        // Nếu là phím chức năng hoặc kết hợp
        if (e.ctrlKey || e.altKey || e.metaKey || e.key.length > 1) {
            e.preventDefault();
            return;
        }

        // So sánh với ký tự tiếp theo trong văn bản
        const expectedChar = currentText[currentPosition];

        // Nếu người dùng gõ sai, không cho phép nhập ký tự đó
        if (e.key !== expectedChar) {
            e.preventDefault();
            setErrorCount(prev => prev + 1);
            return;
        }

        // Nếu đã gõ hết văn bản, kết thúc bài kiểm tra
        if (currentPosition + 1 >= currentText.length) {
            setTimeout(() => finishTest(), 300);
        }
    };

    // Xử lý thay đổi input, cho phép backspace
    const handleInputChange = (e) => {
        const value = e.target.value;

        // Nếu bắt đầu xóa, cho phép người dùng quay lại
        if (value.length < userInput.length) {
            setUserInput(value);
            return;
        }

        // Lấy ký tự mới nhất được thêm vào
        const newChar = value.charAt(value.length - 1);
        const expectedChar = currentText.charAt(userInput.length);

        // Nếu ký tự mới là đúng, chấp nhận nó
        if (newChar === expectedChar) {
            setUserInput(value);

            // Nếu đã gõ hết văn bản, kết thúc
            if (value.length >= currentText.length) {
                finishTest();
            }
        }
        // Nếu không, giữ nguyên input cũ (không thêm ký tự sai)
    };

    // Tính toán metrics theo thời gian thực
    const calculateLiveMetrics = () => {
        // Tính WPM theo thời gian thực
        const timeElapsedMinutes = (Date.now() - startTime) / 60000;
        const words = userInput.trim().split(/\s+/).length;
        const calculatedWpm = Math.round(words / (timeElapsedMinutes || 0.01));

        // Tính accuracy theo thời gian thực
        const calculatedAccuracy = Math.round(((totalKeysPressed - errorCount) / (totalKeysPressed || 1)) * 100);

        setWpm(calculatedWpm > 0 ? calculatedWpm : 0);
        setAccuracy(calculatedAccuracy > 0 ? calculatedAccuracy : 0);
    };

    // Tính toán kết quả cuối cùng
    const calculateFinalResults = () => {
        const words = userInput.trim().split(/\s+/).length;
        const timeInMinutes = (duration - timer) / 60 || duration / 60;
        const calculatedWpm = Math.round(words / timeInMinutes);

        // Tính độ chính xác dựa trên số lần gõ sai
        const calculatedAccuracy = Math.round(((totalKeysPressed - errorCount) / (totalKeysPressed || 1)) * 100);

        setWpm(calculatedWpm || 0);
        setAccuracy(calculatedAccuracy || 0);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom align="center"
                sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}>
                Practice Your Typing
            </Typography>

            <Suspense fallback={<LoadingFallback />}>
                <PracticeSettings
                    level={level}
                    mode={mode}
                    duration={duration}
                    handleLevelChange={handleLevelChange}
                    handleModeChange={handleModeChange}
                    handleDurationChange={handleDurationChange}
                />
            </Suspense>

            <Paper
                elevation={4}
                sx={{
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: '#fff',
                    position: 'relative'
                }}
            >
                <Suspense fallback={<LoadingFallback />}>
                    <StatsBar timer={timer} wpm={wpm} accuracy={accuracy} />
                </Suspense>

                <Suspense fallback={<LoadingFallback />}>
                    <TextDisplay
                        currentText={currentText}
                        userInput={userInput}
                        isStarted={isStarted}
                    />
                </Suspense>

                <Suspense fallback={<LoadingFallback />}>
                    <TypingArea
                        inputRef={inputRef}
                        userInput={userInput}
                        isStarted={isStarted}
                        isFinished={isFinished}
                        errorCount={errorCount}
                        handleInputChange={handleInputChange}
                        handleKeyDown={handleKeyDown}
                    />
                </Suspense>

                <Suspense fallback={<LoadingFallback />}>
                    <ActionButtons
                        isStarted={isStarted}
                        isFinished={isFinished}
                        startTest={startTest}
                        resetTest={resetTest}
                    />
                </Suspense>
            </Paper>

            {isFinished && (
                <Suspense fallback={<LoadingFallback />}>
                    <ResultsPanel
                        wpm={wpm}
                        accuracy={accuracy}
                        errorCount={errorCount}
                        duration={duration}
                        timer={timer}
                        mode={mode}
                        resetTest={resetTest}
                    />
                </Suspense>
            )}
        </Container>
    );
};

export default PracticePage;