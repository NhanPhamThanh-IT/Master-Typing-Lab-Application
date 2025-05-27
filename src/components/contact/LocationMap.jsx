import {
    Box,
    Typography,
    Paper,
    styled
} from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
    borderRadius: 16,
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    height: '300px',
    position: 'relative',
}));

const LocationMap = () => {
    return (
        <StyledPaper elevation={6}>
            <Box
                component="img"
                src="https://maps.googleapis.com/maps/api/staticmap?center=Ho+Chi+Minh+City,Vietnam&zoom=13&size=1200x300&key=YOUR_API_KEY"
                alt="Location Map"
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    p: 2
                }}
            >
                <Typography variant="h6">Ho Chi Minh City, Vietnam</Typography>
                <Typography variant="body2">District 1 • Center Area</Typography>
            </Box>
        </StyledPaper>
    );
};

export default LocationMap;