import { Box, Grid, Fade } from '@mui/material';
import LessonCard from './LessonCard';

const LessonContent = ({
    lessonCategories,
    activeTab,
    loading,
    colors,
    getDifficultyColor,
    handleViewLesson
}) => {
    return (
        <>
            {lessonCategories.map((category, index) => (
                <Fade in={activeTab === index && !loading} timeout={500} key={index}>
                    <Box role="tabpanel" hidden={activeTab !== index} sx={{ py: 2 }}>
                        {activeTab === index && (
                            <>
                                <Grid container spacing={4}>
                                    {category.lessons.map((lesson, lessonIndex) => (
                                        <Grid size={{ xs: 12 }} key={lessonIndex}>
                                            <LessonCard
                                                lesson={lesson}
                                                category={category}
                                                colors={colors}
                                                getDifficultyColor={getDifficultyColor}
                                                handleViewLesson={handleViewLesson}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </>
                        )}
                    </Box>
                </Fade>
            ))}
        </>
    );
};

export default LessonContent;