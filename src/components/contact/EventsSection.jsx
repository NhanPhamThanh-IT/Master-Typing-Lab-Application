import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
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

/**
 * @component EventsSection
 * @description A responsive component that displays upcoming events and office hours.
 * This component provides users with information about scheduled events, meetups, and availability times
 * for consultations or meetings in an organized card-based layout.
 * 
 * @features
 * - Interactive event cards with hover effects and elevation changes
 * - Responsive grid layout that adapts to different screen sizes
 * - Visual separation of event information with proper typography hierarchy
 * - Styled container with hover animation for enhanced visual appeal
 * - Organized presentation of event details including title, date, time, and description
 * - Consistent design language with other contact components
 * 
 * @visualElements
 * - Calendar icon from FontAwesome to represent the events concept
 * - Divider separating the section header from event cards
 * - Card layout for each event with subtle elevation
 * - Hover animations on both container and individual event cards
 * - Consistent spacing and typography styling
 * 
 * @dataStructure
 * - Uses an array of event objects, each containing:
 *   - title: The name of the event (string)
 *   - date: When the event occurs (string)
 *   - time: The time frame of the event (string)
 *   - description: Brief explanation of the event (string)
 * - Events are mapped to individual cards in the UI
 * 
 * @responsiveBehavior
 * - Single column layout on small screens (mobile)
 * - Two column layout on medium and larger screens
 * - Maintains readability and visual hierarchy at all screen sizes
 * - Card heights adjust based on content while maintaining consistent layout
 * 
 * @stylingDetails
 * - Custom styled Paper component for the container with specific border radius and shadow
 * - Custom styled Card components for each event with interactive hover effects
 * - Consistent padding and spacing based on the theme's spacing system
 * - Typography variants used appropriately for different text elements
 * - Subtle animations to enhance user interaction
 * 
 * @accessibilityConsiderations
 * - Proper heading structure with semantic HTML
 * - Sufficient color contrast for text legibility
 * - Logical reading flow for screen readers
 * - Organized content structure for better comprehension
 * 
 * @usage
 * ```jsx
 * import EventsSection from '../components/contact/EventsSection';
 * 
 * const ContactPage = () => (
 *   <div>
 *     <h1>Get in Touch</h1>
 *     <EventsSection />
 *   </div>
 * );
 * ```
 * 
 * @extensibility
 * - Event data can be easily modified or expanded
 * - Additional event details can be incorporated into the card structure
 * - Design can scale to accommodate more events through the grid system
 * - Can be integrated with a backend API to fetch real events dynamically
 * 
 * @returns {JSX.Element} A styled Paper component containing a grid of event cards
 */

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