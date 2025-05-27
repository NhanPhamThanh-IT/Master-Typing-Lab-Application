import {
    Box,
    Container,
    Typography,
    Grid,
    Link,
    Stack,
    Divider,
    IconButton
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardIcon from '@mui/icons-material/Keyboard';

// Constants
import TEXT from '@constants/textConstants';

const Footer = () => {
    return (
        <Box component="footer" sx={{
            bgcolor: 'background.paper',
            py: 4,
            boxShadow: '0px -2px 4px rgba(0,0,0,0.05)'
        }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <KeyboardIcon sx={{ mr: 1, color: 'primary.main' }} />
                            <Typography variant="h6" color="primary.main" fontWeight="bold">
                                {TEXT.BRANCH}
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, pr: { md: 6 }, textAlign: 'justify' }}>
                            Improve your typing skills with our interactive exercises and challenging tests designed for all proficiency levels. Track your progress through detailed analytics, monitor your words per minute, accuracy rates, and see your improvement over time. Our scientifically-designed exercises target specific keyboard areas to enhance your speed, accuracy, and muscle memory effectively. Whether you're a beginner or looking to become a typing expert, TypeMaster provides the tools you need to succeed.
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Useful Links
                        </Typography>
                        <Stack spacing={1}>
                            <Link href="#" underline="hover" color="text.secondary">Home</Link>
                            <Link href="#" underline="hover" color="text.secondary">Exercises</Link>
                            <Link href="#" underline="hover" color="text.secondary">Statistics</Link>
                            <Link href="#" underline="hover" color="text.secondary">About Us</Link>
                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Contact
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                            Have questions or suggestions? Contact us at
                            <Link href="mailto:support@typemaster.com" sx={{ ml: 0.5 }}>
                                support@typemaster.com
                            </Link>
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <IconButton size="small" aria-label="Facebook" color="primary">
                                <FacebookIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small" aria-label="Twitter" color="primary">
                                <TwitterIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small" aria-label="LinkedIn" color="primary">
                                <LinkedInIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small" aria-label="GitHub" color="primary">
                                <GitHubIcon fontSize="small" />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ mt: 4, mb: 3 }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} {TEXT.BRANCH} - All rights reserved
                    </Typography>
                    <Box>
                        <Link href="#" underline="hover" color="text.secondary" sx={{ mx: 1 }}>
                            Privacy Policy
                        </Link>
                        <Link href="#" underline="hover" color="text.secondary" sx={{ mx: 1 }}>
                            Terms of Use
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;