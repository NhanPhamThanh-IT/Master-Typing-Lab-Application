import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhone,
    faLocationDot,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';
import {
    Box,
    Typography,
    Paper,
    Avatar,
    styled,
    Divider,
    Chip
} from '@mui/material';

/**
 * @component ContactInfo
 * @description A comprehensive contact information component that displays various ways to contact the website owner or organization.
 * This component presents essential contact details including email, phone, location, and website in a visually appealing format.
 * 
 * @features
 * - Styled Material UI Paper container with elevation and hover effects
 * - Consistent layout for different contact methods with proper semantic hierarchy
 * - Visual icons for each contact method to improve user recognition
 * - Highlighted preferred contact method with a special chip indicator
 * - Responsive design that works across various screen sizes
 * - Interactive website link with hover effect
 * - Auxiliary information for each contact method (e.g., available hours for phone)
 * 
 * @visualElements
 * - Custom styled avatar icons for each contact method
 * - Primary color scheme for visual consistency with the rest of the application
 * - Proper spacing and alignment between information items
 * - Elevation and transform animation on hover for improved user interaction
 * - Clean typography hierarchy for different types of information
 * 
 * @structureDetails
 * - Each contact method follows the same structure pattern for consistency:
 *   1. Icon wrapper with FontAwesome icon
 *   2. Label for contact type (Email, Phone, etc.)
 *   3. Actual contact information with emphasized typography
 *   4. Optional auxiliary information or special indicators
 * - Divider for separating the heading from the contact information
 * 
 * @accessibilityFeatures
 * - Semantic HTML structure with proper heading levels
 * - Color contrast that meets accessibility guidelines
 * - Interactive elements with clear visual indicators
 * - Proper text hierarchy for screen readers
 * 
 * @dataManagement
 * - All contact information is hardcoded in the component
 * - Can be easily modified to accept props for dynamic information
 * - Structured layout that can accommodate various contact information lengths
 * 
 * @usage
 * ```jsx
 * import ContactInfo from '../components/contact/ContactInfo';
 * 
 * const ContactPage = () => (
 *   <div>
 *     <h1>Get in Touch</h1>
 *     <ContactInfo />
 *   </div>
 * );
 * ```
 * 
 * @customization
 * - Colors can be adjusted through the theme's palette
 * - Icon sizes and container dimensions are defined with theme spacing
 * - Animation timings and effects can be modified in the styled components
 * - Contact details can be updated directly in the component
 * 
 * @returns {JSX.Element} A styled Paper component containing organized contact information
 */

// Custom styled components
const ContactIconWrapper = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    marginRight: theme.spacing(2),
    width: 50,
    height: 50
}));

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

const ContactInfo = () => {
    return (
        <StyledPaper elevation={6}>
            <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
                Contact Information
            </Typography>
            <Divider sx={{ mb: 4 }} />

            <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <ContactIconWrapper>
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    </ContactIconWrapper>
                    <Box>
                        <Typography variant="body2" color="text.secondary">
                            Email
                        </Typography>
                        <Typography variant="body1" fontWeight="medium">
                            ptnhanit230104@gmail.com
                        </Typography>
                        <Chip
                            label="Preferred contact method"
                            size="small"
                            color="primary"
                            variant="outlined"
                            sx={{ mt: 0.5 }}
                        />
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <ContactIconWrapper>
                        <FontAwesomeIcon icon={faPhone} size="lg" />
                    </ContactIconWrapper>
                    <Box>
                        <Typography variant="body2" color="text.secondary">
                            Phone
                        </Typography>
                        <Typography variant="body1" fontWeight="medium">
                            (+84) 123 456 789
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            Available weekdays 9AM-5PM
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <ContactIconWrapper>
                        <FontAwesomeIcon icon={faLocationDot} size="lg" />
                    </ContactIconWrapper>
                    <Box>
                        <Typography variant="body2" color="text.secondary">
                            Location
                        </Typography>
                        <Typography variant="body1" fontWeight="medium">
                            Ho Chi Minh City, Vietnam
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            District 1, Center Area
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ContactIconWrapper>
                        <FontAwesomeIcon icon={faGlobe} size="lg" />
                    </ContactIconWrapper>
                    <Box>
                        <Typography variant="body2" color="text.secondary">
                            Website
                        </Typography>
                        <Typography variant="body1" component="a" href="https://yourwebsite.com"
                            sx={{
                                color: 'primary.main',
                                textDecoration: 'none',
                                '&:hover': { textDecoration: 'underline' }
                            }}
                        >
                            yourwebsite.com
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </StyledPaper>
    );
};

export default ContactInfo;