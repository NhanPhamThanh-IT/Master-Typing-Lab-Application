/**
 * @fileoverview Footer component for the Typing Test Application.
 * This component renders the application's footer section which includes:
 * - Application branding and description
 * - Navigation links to important pages
 * - Contact information and social media links
 * - Copyright information and legal links
 * 
 * The footer follows a responsive design pattern with a three-column layout
 * on larger screens and stacked layout on smaller screens.
 * 
 * @module components/layout/Footer
 * @requires @mui/material
 * @requires @mui/icons-material
 * @requires ./constants
 */

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
import CONSTANTS from './constants';

/**
 * Footer component that displays application information, navigation, 
 * contact details, and copyright information.
 * 
 * @component
 * @returns {JSX.Element} A footer component with branding, navigation, contact info, and copyright
 * 
 * @example
 * return (
 *   <Footer />
 * )
 */
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
                                {CONSTANTS.BRANCH.NAME}
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, pr: { md: 6 }, textAlign: 'justify' }}>
                            {CONSTANTS.BRANCH.DESCRIPTION}
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            {CONSTANTS.USEFULLINKS.TITLE}
                        </Typography>
                        <Stack spacing={1}>
                            {CONSTANTS.USEFULLINKS.NAVITEMS.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.HREF || '#'}
                                    underline="hover"
                                    color="text.secondary"
                                >
                                    {link.TITLE}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            {CONSTANTS.CONTACT.TITLE || 'Contact'}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                            {CONSTANTS.CONTACT.EMAIL.TEXT}
                            <Link href={CONSTANTS.CONTACT.EMAIL.EMAILLINK} underline="hover" color="text.secondary">
                                {CONSTANTS.CONTACT.EMAIL.EMAIL}
                            </Link>
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            {CONSTANTS.CONTACT.SOCIALS_LINKS.map((social, index) => (
                                <IconButton
                                    key={index}
                                    href={social.HREF || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                    aria-label={social.ICON}
                                >
                                    {social.ICON === 'Facebook' && <FacebookIcon />}
                                    {social.ICON === 'Twitter' && <TwitterIcon />}
                                    {social.ICON === 'LinkedIn' && <LinkedInIcon />}
                                    {social.ICON === 'GitHub' && <GitHubIcon />}
                                </IconButton>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ mt: 4, mb: 3 }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <Typography variant="body2" color="text.secondary">
                        {CONSTANTS.SUPPORT[0].TEXT}
                    </Typography>
                    <Box>
                        {CONSTANTS.SUPPORT.slice(1).map((item, index) => (
                            <Link
                                key={index}
                                href={item.HREF || '#'}
                                underline="hover"
                                color="text.secondary"
                                sx={{ mx: 1 }}
                            >
                                {item.TEXT}
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;