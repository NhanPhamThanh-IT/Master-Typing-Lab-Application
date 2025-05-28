import {
    Box,
    Typography,
    Grid,
    Avatar,
    Grow,
    CardContent,
    Paper,
    Divider,
    Chip
} from '@mui/material';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const ProTipsSection = () => {
    const tips = [
        {
            icon: <KeyboardIcon fontSize="large" />,
            title: "Wrist Position",
            description: "Keep your wrists elevated while typing, not resting on the desk",
            tag: "Ergonomics"
        },
        {
            icon: <VisibilityIcon fontSize="large" />,
            title: "Eye Focus",
            description: "Train yourself to look at the screen, not your fingers",
            tag: "Technique"
        },
        {
            icon: <CalendarMonthIcon fontSize="large" />,
            title: "Consistency",
            description: "Practice regularly, even just 15 minutes daily for steady improvement",
            tag: "Habit"
        }
    ];

    const getBorderColor = (index) => {
        // Colors that match your current UI theme
        const colors = ['#3f51b5', '#6D59A8', '#59A88B'];
        return colors[index % colors.length];
    };

    return (
        <Paper
            elevation={6}
            sx={{
                mt: 6,
                mb: 6,
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
                background: '#3f51b5',
                boxShadow: '0 15px 35px rgba(0,0,0,0.25)',
                transition: 'transform 0.3s ease-in-out',
            }}
        >
            {/* Header section with improved styling */}
            <Box
                sx={{
                    p: { xs: 3, md: 4 },
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'center',
                    gap: 2,
                    borderBottom: '1px solid rgba(255,255,255,0.15)',
                    background: 'linear-gradient(135deg, #3f51b5 0%, #5c6bc0 100%)',
                }}
            >
                <Avatar
                    sx={{
                        bgcolor: 'rgba(255,255,255,0.95)',
                        color: '#4568dc',
                        width: 60,
                        height: 60,
                        boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                    }}
                >
                    <LightbulbIcon fontSize="large" />
                </Avatar>
                <Box>
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        color="#FFFFFF"
                        sx={{ letterSpacing: 0.5 }}
                    >
                        Pro Typing Tips
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="rgba(255,255,255,0.8)"
                        sx={{ mt: 0.5 }}
                    >
                        Boost your speed and accuracy with these expert suggestions
                    </Typography>
                </Box>
            </Box>

            {/* Tips content section */}
            <Box sx={{ p: { xs: 3, md: 4 }, bgcolor: 'white' }}>
                <Grid container spacing={3}>
                    {tips.map((tip, index) => (
                        <Grow
                            in={true}
                            key={index}
                            timeout={(index + 1) * 300}
                        >
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        height: '100%',
                                        borderRadius: 2,
                                        border: `2px solid ${getBorderColor(index)}`,
                                        transition: 'transform 0.2s, box-shadow 0.2s',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                mb: 2
                                            }}
                                        >
                                            <Avatar
                                                sx={{
                                                    bgcolor: getBorderColor(index),
                                                    mr: 2,
                                                    boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                                                }}
                                            >
                                                {tip.icon}
                                            </Avatar>
                                            <Typography variant="h6" fontWeight="600">
                                                {tip.title}
                                            </Typography>
                                        </Box>

                                        <Typography variant="body1" color="text.secondary" paragraph>
                                            {tip.description}
                                        </Typography>

                                        <Divider sx={{ my: 2 }} />

                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Chip
                                                label={tip.tag}
                                                size="small"
                                                sx={{
                                                    borderColor: getBorderColor(index),
                                                    color: getBorderColor(index)
                                                }}
                                                variant="outlined"
                                            />
                                        </Box>
                                    </CardContent>
                                </Paper>
                            </Grid>
                        </Grow>
                    ))}
                </Grid>
            </Box>
        </Paper>
    );
};

export default ProTipsSection;