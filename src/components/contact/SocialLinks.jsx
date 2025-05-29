import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faLinkedin,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {
    faFileDownload
} from '@fortawesome/free-solid-svg-icons';
import {
    Box,
    Typography,
    Paper,
    Avatar,
    Link,
    styled,
    Divider,
    Tooltip,
    Button
} from '@mui/material';

/**
 * @component SocialLinks
 * @description A component that displays social media links and a resume download button.
 * This component provides users with various ways to connect with the website owner through
 * popular social media platforms, and offers quick access to download a resume/CV.
 * 
 * @features
 * - Interactive social media icons with hover animations and tooltips
 * - Resume download button with animated gradient effect
 * - Consistent styling with other contact components
 * - Proper external link handling with security attributes
 * - Visual separation between social links and the resume button
 * - Tooltip information for improved user experience
 * - Responsive layout that adapts to different screen sizes
 * 
 * @visualElements
 * - Social media icons from FontAwesome representing different platforms
 * - Avatar containers for each social icon with interactive hover effects
 * - Animated button with gradient sweep effect for the resume download
 * - Dividers for visual separation of content sections
 * - Consistent typography for headings and button text
 * 
 * @interactionBehavior
 * - Social icons change color and elevate on hover for visual feedback
 * - Download button features a sliding gradient animation on hover
 * - All links open in new tabs to maintain the user's current session
 * - Tooltips appear on hover to provide additional context for each icon
 * - Container has a subtle elevation animation on hover
 * 
 * @dataStructure
 * - Uses an array of social link objects, each containing:
 *   - icon: The FontAwesome icon to display
 *   - title: The name of the social platform (displayed in tooltip)
 *   - url: The external link to the social profile
 * - Social links are mapped to individual interactive icons
 * 
 * @securityConsiderations
 * - External links include rel="noopener noreferrer" to prevent security vulnerabilities
 * - All links open in new tabs (target="_blank") to preserve the user's current session
 * - No sensitive information is stored or transmitted through this component
 * 
 * @stylingDetails
 * - Custom styled Paper component for container consistency
 * - Custom styled Avatar components for the social icons with interactive effects
 * - Custom styled Button component with animated gradient effect
 * - Consistent spacing using theme.spacing for layout harmony
 * - Typography variants applied consistently with other components
 * 
 * @responsiveBehavior
 * - Flexible layout that adapts to container width
 * - Adequate spacing between interactive elements for touch devices
 * - Visual hierarchy maintained across different screen sizes
 * 
 * @usage
 * ```jsx
 * import SocialLinks from '../components/contact/SocialLinks';
 * 
 * const ContactPage = () => (
 *   <div>
 *     <h1>Get in Touch</h1>
 *     <SocialLinks />
 *   </div>
 * );
 * ```
 * 
 * @customization
 * - Social links can be easily modified by updating the socialLinks array
 * - Icon styling can be adjusted through the SocialIcon styled component
 * - Button styling can be customized via the AnimatedButton styled component
 * - Content layout can be modified through Box sx props
 * 
 * @returns {JSX.Element} A styled Paper component containing social media links and a resume download button
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

const SocialIcon = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.grey[700],
    margin: theme.spacing(0, 1),
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        transform: 'translateY(-3px)',
        boxShadow: theme.shadows[4],
    },
}));

const AnimatedButton = styled(Button)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
        transition: 'all 0.6s ease',
    },
    '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: theme.shadows[4],
        '&:before': {
            left: '100%',
        }
    }
}));

const SocialLinks = () => {
    const socialLinks = [
        { icon: faGithub, title: 'GitHub', url: 'https://github.com/yourusername' },
        { icon: faLinkedin, title: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
        { icon: faTwitter, title: 'Twitter', url: 'https://twitter.com/yourhandle' },
        { icon: faInstagram, title: 'Instagram', url: 'https://instagram.com/yourprofile' }
    ];

    return (
        <StyledPaper elevation={6}>
            <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
                Connect with me
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                {socialLinks.map((social, index) => (
                    <Tooltip key={index} title={social.title}>
                        <Link href={social.url} target="_blank" rel="noopener noreferrer">
                            <SocialIcon>
                                <FontAwesomeIcon icon={social.icon} />
                            </SocialIcon>
                        </Link>
                    </Tooltip>
                ))}
            </Box>

            <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid', borderColor: 'divider', textAlign: 'center' }}>
                <Tooltip title="Download CV">
                    <AnimatedButton
                        variant="outlined"
                        startIcon={<FontAwesomeIcon icon={faFileDownload} />}
                        sx={{ mt: 1 }}
                    >
                        Download Resume
                    </AnimatedButton>
                </Tooltip>
            </Box>
        </StyledPaper>
    );
};

export default SocialLinks;