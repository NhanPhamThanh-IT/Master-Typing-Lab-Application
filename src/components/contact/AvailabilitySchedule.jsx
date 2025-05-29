import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    faClock
} from '@fortawesome/free-solid-svg-icons';
import {
    Box,
    Typography,
    Paper,
    styled
} from '@mui/material';

/**
 * @component AvailabilitySchedule
 * @description A responsive component that displays the availability schedule for contact purposes.
 * This component showcases when users can expect to receive responses or services based on different days of the week.
 * 
 * @features
 * - Styled with Material UI for consistent theming
 * - Animated hover effect with subtle elevation change
 * - Color-coded availability status (unavailable dates shown in error color)
 * - Responsive layout that works on all device sizes
 * - Clear visual separation between different schedule entries
 * 
 * @implementationDetails
 * - Uses a static array of availability data that can be easily modified
 * - Implements custom styling through Material UI's styled API
 * - Each day's entry is rendered with appropriate styling based on availability
 * - Hover animation provides subtle user feedback
 * 
 * @visualElements
 * - Clock icon from FontAwesome to represent time/schedule concept
 * - Dividers between schedule entries for clear visual separation
 * - Special color coding for unavailable times
 * 
 * @usage
 * ```jsx
 * import AvailabilitySchedule from '../components/contact/AvailabilitySchedule';
 * 
 * const ContactPage = () => (
 *   <div>
 *     <h1>Contact Us</h1>
 *     <AvailabilitySchedule />
 *   </div>
 * );
 * ```
 * 
 * @returns {JSX.Element} A styled Paper component containing the availability schedule
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