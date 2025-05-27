import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
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