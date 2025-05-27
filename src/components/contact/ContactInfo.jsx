import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { 
    Box, 
    Typography, 
    Paper, 
    Avatar, 
    styled,
    Divider,
    Chip
} from '@mui/material';

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