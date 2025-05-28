import {
    useState,
    useEffect,
    lazy,
    Suspense
} from 'react';
import {
    Container,
    CircularProgress,
    Box
} from '@mui/material';

// Theme imports
import {
    colorPalette
} from '@theme/colors';

// Lazy loaded component imports
const HeroSection = lazy(() => import('@components/practice/TypingLessons/HeroSection'));
const LessonTabs = lazy(() => import('@components/practice/TypingLessons/LessonTabs'));
const LessonContent = lazy(() => import('@components/practice/TypingLessons/LessonContent'));
const ProTipsSection = lazy(() => import('@components/practice/TypingLessons/ProTipsSection'));

// Data import
import {
    lessonCategoriesData
} from '@data/lessonData';

// Loading fallback component
const LoadingFallback = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
        <CircularProgress />
    </Box>
);

const TypingLessonsPage = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [loading, setLoading] = useState(true);
    const colors = colorPalette;

    useEffect(() => {
        // Simulate loading content
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [activeTab]);

    const handleTabChange = (event, newValue) => {
        setLoading(true);
        setActiveTab(newValue);
    };

    // Helper function to get difficulty color
    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Beginner':
                return colors.accent1;
            case 'Intermediate':
                return colors.secondary;
            case 'Advanced':
                return colors.accent2;
            default:
                return colors.accent3;
        }
    };

    const handleViewLesson = (lessonTitle) => {
        // Here you would implement navigation to the detailed lesson
        console.log(`Viewing lesson: ${lessonTitle}`);
    };

    return (
        <Container maxWidth="xl">
            <Suspense fallback={<LoadingFallback />}>
                <HeroSection />
            </Suspense>

            <Suspense fallback={<LoadingFallback />}>
                <LessonTabs
                    lessonCategories={lessonCategoriesData}
                    activeTab={activeTab}
                    handleTabChange={handleTabChange}
                    colors={colors}
                />
            </Suspense>

            <Suspense fallback={<LoadingFallback />}>
                <LessonContent
                    lessonCategories={lessonCategoriesData}
                    activeTab={activeTab}
                    loading={loading}
                    colors={colors}
                    getDifficultyColor={getDifficultyColor}
                    handleViewLesson={handleViewLesson}
                />
            </Suspense>

            <Suspense fallback={<LoadingFallback />}>
                <ProTipsSection />
            </Suspense>
        </Container>
    );
};

export default TypingLessonsPage;