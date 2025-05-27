import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import {
    Box,
    Typography,
    Paper,
    Card,
    CardContent,
    Grid,
    styled,
    Divider
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

const EventCard = styled(Card)(({ theme }) => ({
    height: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: theme.shadows[6],
    },
}));

const EventsSection = () => {
    const events = [
        {
            title: "Open Office Hours",
            date: "Every Tuesday",
            time: "3:00 PM - 5:00 PM",
            description: "Virtual drop-in sessions for quick questions and consultations."
        },
        {
            title: "Tech Meetup",
            date: "June 15, 2025",
            time: "7:00 PM - 9:00 PM",
            description: "Join me for a local tech community meetup at WorkspaceCafe."
        }
    ];

    return (
        <StyledPaper elevation={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FontAwesomeIcon icon={faCalendarAlt} color="primary" style={{ marginRight: 8 }} />
                <Typography variant="h5" component="h2" fontWeight="bold">
                    Office Hours & Events
                </Typography>
            </Box>
            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={2}>
                {events.map((event, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                        <EventCard variant="outlined">
                            <CardContent>
                                <Typography variant="h6" component="div" fontWeight="bold">
                                    {event.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    {event.date} • {event.time}
                                </Typography>
                                <Typography variant="body2">
                                    {event.description}
                                </Typography>
                            </CardContent>
                        </EventCard>
                    </Grid>
                ))}
            </Grid>
        </StyledPaper>
    );
};

export default EventsSection;