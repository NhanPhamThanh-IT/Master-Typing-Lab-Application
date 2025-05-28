import { Card, Box, CardMedia, CardContent, Typography, Divider, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const LessonCard = ({ lesson, category, colors, getDifficultyColor, handleViewLesson }) => {
    return (
        <Card sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            transition: 'transform 0.3s, box-shadow 0.3s',
            borderRadius: 2,
            overflow: 'hidden',
            border: '1px solid rgba(0,0,0,0.05)',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
            }
        }}>
            <Box
                sx={{
                    position: 'relative',
                    width: { xs: '100%', md: '40%' },
                    height: { xs: 240, md: 300 },
                }}
            >
                <CardMedia
                    component="img"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        }
                    }}
                    image={lesson.imageUrl}
                    alt={lesson.imageAlt}
                    onError={(e) => {
                        e.target.src = "https://via.placeholder.com/500x300?text=Typing+Lesson";
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        borderRadius: '12px',
                        padding: '3px 12px',
                        border: `2px solid ${getDifficultyColor(lesson.difficulty)}`,
                    }}
                >
                    <Typography
                        variant="caption"
                        sx={{
                            fontWeight: 600,
                            color: getDifficultyColor(lesson.difficulty),
                        }}
                    >
                        {lesson.difficulty}
                    </Typography>
                </Box>
            </Box>
            <CardContent sx={{ flex: '1 1 auto', p: { xs: 2, md: 4 } }}>
                <Typography variant="h5" component="h3" fontWeight="500" color={colors.darkText}>
                    {lesson.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {lesson.description}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body1" paragraph color={colors.darkText} sx={{ opacity: 0.85 }}>
                    {lesson.content}
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => handleViewLesson(lesson.title)}
                    sx={{
                        mt: 2,
                        bgcolor: category.color,
                        color: colors.lightText,
                        '&:hover': {
                            bgcolor: category.color,
                            filter: 'brightness(0.9)'
                        }
                    }}
                >
                    Read Full Lesson
                </Button>
            </CardContent>
        </Card>
    );
};

export default LessonCard;