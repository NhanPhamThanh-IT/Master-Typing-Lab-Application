import {
    Box,
    Typography,
    Grid,
    Avatar,
    Grow,
    Divider
} from '@mui/material';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ProTipsSection = ({ colors }) => {
    const tips = [
        {
            icon: <KeyboardIcon />,
            title: "Wrist Position",
            description: "Keep your wrists elevated while typing, not resting on the desk",
            color: colors.primary
        },
        {
            icon: <VisibilityIcon />,
            title: "Eye Focus",
            description: "Train yourself to look at the screen, not your fingers",
            color: colors.secondary
        },
        {
            icon: <CalendarMonthIcon />,
            title: "Consistency",
            description: "Practice regularly, even just 15 minutes daily for steady improvement",
            color: colors.accent2
        }
    ];

    return (
        <Box
            sx={{
                mt: 6,
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                background: colors.gradient,
                color: colors.lightText,
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                overflow: 'hidden',
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at top right, rgba(255,255,255,0.1), transparent 70%)',
                    pointerEvents: 'none'
                }
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{
                    width: 40,
                    height: 4,
                    backgroundColor: colors.lightText,
                    mr: 2,
                    borderRadius: 1
                }} />
                <Typography variant="h5" fontWeight="600">Pro Typing Tips</Typography>
            </Box>

            <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.1)', mb: 3 }} />

            <Grid container spacing={3}>
                {tips.map((tip, index) => (
                    <Grow in={true} timeout={(index + 1) * 300} key={index}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    p: 2,
                                    borderRadius: 2,
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                        transform: 'translateY(-5px)'
                                    }
                                }}
                            >
                                <Avatar
                                    sx={{
                                        bgcolor: 'rgba(255,255,255,0.9)',
                                        color: tip.color,
                                        width: 56,
                                        height: 56,
                                        mb: 2
                                    }}
                                >
                                    {tip.icon}
                                </Avatar>
                                <Typography variant="h6" fontWeight="500" sx={{ mb: 1 }}>
                                    {tip.title}
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                    {tip.description}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grow>
                ))}
            </Grid>
        </Box>
    );
};

export default ProTipsSection;