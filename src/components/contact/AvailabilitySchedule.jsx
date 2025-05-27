import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
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
    padding: theme.spacing(4),
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)',
    }
}));

const AvailabilitySchedule = () => {
    // Availability schedule data
    const availabilityData = [
        { day: 'Monday - Friday', hours: '9:00 AM - 5:00 PM' },
        { day: 'Saturday', hours: 'By appointment only' },
        { day: 'Sunday', hours: 'Unavailable' }
    ];

    return (
        <StyledPaper elevation={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <FontAwesomeIcon icon={faClock} color="primary" style={{ marginRight: 8 }} />
                <Typography variant="h5" component="h2" fontWeight="bold">
                    Availability
                </Typography>
            </Box>

            {availabilityData.map((item, index) => (
                <Box key={index} sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    py: 1.5,
                    borderBottom: index !== availabilityData.length - 1 ? '1px solid' : 'none',
                    borderColor: 'divider'
                }}>
                    <Typography variant="body1" fontWeight="medium">{item.day}</Typography>
                    <Typography variant="body2" color={item.hours === 'Unavailable' ? 'error.main' : 'text.primary'}>
                        {item.hours}
                    </Typography>
                </Box>
            ))}
        </StyledPaper>
    );
};

export default AvailabilitySchedule;