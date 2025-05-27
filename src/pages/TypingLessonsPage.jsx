import { useState } from 'react';
import { Container, Typography, Card, CardContent, Grid, Box, Tabs, Tab, Button } from '@mui/material';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import SpeedIcon from '@mui/icons-material/Speed';
import HomeIcon from '@mui/icons-material/Home';
import PracticeIcon from '@mui/icons-material/FitnessCenter';
import { Link } from 'react-router-dom';

const TypingLessons = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    // Lesson content with image URLs instead of local files
    const lessons = [
        {
            id: 'basics',
            title: 'Typing Basics',
            content: [
                {
                    subtitle: 'Proper Posture',
                    description: 'Sit up straight with your feet flat on the floor. Keep your elbows bent at a 90-degree angle. Position your screen at eye level.',
                    image: 'https://www.typing.com/dist/student/images/article/typing-posture.webp',
                    tips: [
                        'Keep your wrists slightly elevated, not resting on the desk',
                        'Your back should be against the chair',
                        'Maintain a relaxed posture to prevent strain'
                    ]
                },
                {
                    subtitle: 'Hand Positioning',
                    description: 'Place your fingers on the home row keys. Left hand fingers on A, S, D, F and right hand fingers on J, K, L, ;',
                    image: 'https://www.typing.com/dist/student/images/article/finger-position.webp',
                    tips: [
                        'Your thumbs should rest on the space bar',
                        'Curve your fingers slightly',
                        'Keep your wrists straight, not bent up or down'
                    ]
                }
            ]
        },
        {
            id: 'homeRow',
            title: 'Home Row Keys',
            content: [
                {
                    subtitle: 'Home Row Position',
                    description: 'The home row is where your fingers rest when not typing other keys. It consists of A, S, D, F for the left hand and J, K, L, ; for the right hand.',
                    image: 'https://www.typing.com/dist/student/images/article/home-row.webp',
                    practice: 'asdf jkl; asdf jkl; ff jj dd kk ss ll aa ;;',
                    tips: [
                        'Always return to the home position after typing other keys',
                        'Practice feeling the small bumps on the F and J keys without looking',
                        'Each finger is responsible for specific keys in its column'
                    ]
                }
            ]
        },
        {
            id: 'topRow',
            title: 'Top Row Keys',
            content: [
                {
                    subtitle: 'Top Row Practice',
                    description: 'The top row includes Q, W, E, R, T for the left hand and Y, U, I, O, P for the right hand. Reach up from the home position to type these keys.',
                    image: 'https://www.typing.com/dist/student/images/article/top-row.webp',
                    practice: 'qwert yuiop qwer ty uiop qwe rty uio',
                    tips: [
                        'Reach up from the home row without moving your palm',
                        'The same finger that types F should type R and T',
                        'The same finger that types J should type U and Y'
                    ]
                }
            ]
        },
        {
            id: 'bottomRow',
            title: 'Bottom Row Keys',
            content: [
                {
                    subtitle: 'Bottom Row Practice',
                    description: 'The bottom row includes Z, X, C, V, B for the left hand and N, M, ,, ., / for the right hand. Reach down from the home position to type these keys.',
                    image: 'https://www.typing.com/dist/student/images/article/bottom-row.webp',
                    practice: 'zxcvb nm,./ zxc vb nm, ./ zx cvb nm, ./',
                    tips: [
                        'Reach down from the home row without moving your palm',
                        'Use your little finger for Z and /',
                        'Use your ring finger for X and .'
                    ]
                }
            ]
        },
        {
            id: 'advanced',
            title: 'Advanced Techniques',
            content: [
                {
                    subtitle: 'Speed Building',
                    description: 'Once you\'re comfortable with the key positions, focus on building speed while maintaining accuracy.',
                    image: 'https://www.typing.com/dist/student/images/article/speed-typing.webp',
                    tips: [
                        'Practice with common words and gradually increase speed',
                        'Focus on rhythm rather than raw speed',
                        'Take short breaks to avoid fatigue',
                        'Try to look at the screen instead of your fingers'
                    ],
                    practice: 'the quick brown fox jumps over the lazy dog'
                },
                {
                    subtitle: 'Special Characters',
                    description: 'Learn to type numbers and special characters efficiently by reaching from the home position.',
                    image: 'https://www.typing.com/dist/student/images/article/special-chars.webp',
                    tips: [
                        'Use the same finger mapping principles from the letter keys',
                        'Practice switching between letters and numbers',
                        'For shift key combinations, use the opposite hand from the character being typed'
                    ],
                    practice: '1234 5678 90!@ #$%^ &*()'
                }
            ]
        }
    ];

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    <KeyboardIcon sx={{ mr: 1, fontSize: 35 }} />
                    Typing Lessons
                </Typography>
                <Button
                    component={Link}
                    to="/"
                    variant="outlined"
                    startIcon={<HomeIcon />}
                    sx={{ height: 40 }}
                >
                    Back to Home
                </Button>
            </Box>

            <Typography variant="h6" component="p" paragraph>
                Learn to type correctly and efficiently with these structured lessons. Each section focuses on different aspects of proper typing technique.
            </Typography>

            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
                <Tabs
                    value={currentTab}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    textColor="primary"
                    indicatorColor="primary"
                >
                    {lessons.map((lesson, index) => (
                        <Tab
                            key={lesson.id}
                            label={lesson.title}
                            icon={index === 0 ? <FingerprintIcon /> : index === 4 ? <SpeedIcon /> : <PracticeIcon />}
                            iconPosition="start"
                        />
                    ))}
                </Tabs>
            </Box>

            {lessons.map((lesson, index) => (
                <Box key={lesson.id} hidden={currentTab !== index}>
                    <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'secondary.main', mb: 3 }}>
                        {lesson.title}
                    </Typography>

                    {lesson.content.map((section, sectionIndex) => (
                        <Card key={sectionIndex} sx={{ mb: 4, boxShadow: 3 }}>
                            <CardContent>
                                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
                                    {section.subtitle}
                                </Typography>

                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="body1" paragraph>
                                            {section.description}
                                        </Typography>

                                        {section.tips && (
                                            <>
                                                <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                                                    Tips:
                                                </Typography>
                                                <ul>
                                                    {section.tips.map((tip, tipIndex) => (
                                                        <Typography component="li" key={tipIndex} paragraph>
                                                            {tip}
                                                        </Typography>
                                                    ))}
                                                </ul>
                                            </>
                                        )}

                                        {section.practice && (
                                            <>
                                                <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                                                    Practice Text:
                                                </Typography>
                                                <Card sx={{ bgcolor: 'background.default', p: 2, borderRadius: 2, mt: 1 }}>
                                                    <Typography variant="body1" fontFamily="monospace" fontSize="1.1rem">
                                                        {section.practice}
                                                    </Typography>
                                                </Card>
                                            </>
                                        )}
                                    </Grid>

                                    {section.image && (
                                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Box sx={{ textAlign: 'center', width: '100%' }}>
                                                <Box
                                                    component="img"
                                                    src={section.image}
                                                    alt={section.subtitle}
                                                    sx={{
                                                        maxWidth: '100%',
                                                        maxHeight: '300px',
                                                        borderRadius: '8px',
                                                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                                                    }}
                                                    onError={(e) => {
                                                        // Fallback if image fails to load
                                                        e.target.src = "https://via.placeholder.com/400x200?text=Typing+Lesson";
                                                    }}
                                                />
                                                <Typography variant="caption" display="block" sx={{ mt: 1, fontStyle: 'italic' }}>
                                                    {section.subtitle} illustration
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    )}
                                </Grid>
                            </CardContent>
                        </Card>
                    ))}

                    {index < lessons.length - 1 && (
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, mb: 4 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => setCurrentTab(index + 1)}
                            >
                                Next Lesson: {lessons[index + 1].title}
                            </Button>
                        </Box>
                    )}
                </Box>
            ))}

            <Card sx={{ mt: 6, bgcolor: 'primary.light', color: 'primary.contrastText', p: 2 }}>
                <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Ready to Practice?
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Apply what you've learned in our typing tests and exercises.
                    </Typography>
                    <Button
                        component={Link}
                        to="/typing-test"
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{ mt: 1 }}
                    >
                        Go to Typing Practice
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default TypingLessons;