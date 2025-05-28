import {
    Box,
    Typography,
    Chip
} from '@mui/material';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SpeedIcon from '@mui/icons-material/Speed';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

const HeroSection = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                mb: 5,
                textAlign: 'center',
                p: 4,
                borderRadius: 3,
                background: '#F8F9FA',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                zIndex: 0,
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: '2px',
                    borderRadius: 3,
                    background: 'linear-gradient(90deg, #2A5298, #6D59A8, #59A88B)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    zIndex: -1,
                },
            }}
        >
            <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                    fontWeight: 700,
                    background: 'linear-gradient(90deg, #2A5298, #6D59A8, #59A88B)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 2,
                    color: '#333333'
                }}
            >
                Master the Art of Typing
            </Typography>
            <Typography variant="h6" color="#333333" sx={{ mb: 3, maxWidth: '800px', mx: 'auto', opacity: 0.85 }}>
                Learn professional typing techniques with our comprehensive lessons
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                <Chip
                    icon={<LocalLibraryIcon />}
                    label="12 Detailed Lessons"
                    sx={{
                        bgcolor: 'rgba(42, 82, 152, 0.1)',
                        color: '#333333',
                        border: '1px solid #2A5298', // Primary color
                        '& .MuiChip-icon': { color: '#2A5298' }
                    }}
                />
                <Chip
                    icon={<SpeedIcon />}
                    label="Improve Your Speed"
                    sx={{
                        bgcolor: 'rgba(109, 89, 168, 0.1)',
                        color: '#333333',
                        border: '1px solid #6D59A8', // Accent2 color
                        '& .MuiChip-icon': { color: '#6D59A8' }
                    }}
                />
                <Chip
                    icon={<AccessibilityNewIcon />}
                    label="Ergonomic Techniques"
                    sx={{
                        bgcolor: 'rgba(89, 168, 139, 0.1)',
                        color: '#333333',
                        border: '1px solid #59A88B', // Accent3 color
                        '& .MuiChip-icon': { color: '#59A88B' }
                    }}
                />
            </Box>
        </Box>
    );
};

export default HeroSection;