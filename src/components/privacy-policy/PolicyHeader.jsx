import { Typography, Card, CardContent, Chip } from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';

const PolicyHeader = () => {
    return (
        <Card sx={{ mb: 4, backgroundColor: '#3f51b5', borderRadius: '12px' }}>
            <CardContent sx={{ textAlign: 'center', py: 5 }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: 'white', mb: 2 }}>
                    Privacy Policy
                </Typography>
                <Typography variant="subtitle2" sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#dcdcdc' }}>
                    <EventNoteIcon sx={{ mr: 1, color: '#dcdcdc' }} />
                    Last Updated: May 28, 2025
                </Typography>
                <Chip label="Official Document" sx={{ fontWeight: 500, backgroundColor: 'white', color: '#3f51b5' }} />
            </CardContent>
        </Card>
    );
};

export default PolicyHeader;