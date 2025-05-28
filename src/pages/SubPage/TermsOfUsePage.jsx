import React from 'react';
import { Container, Typography, Box, Divider, Paper, Breadcrumbs, Link, Card, CardContent, Chip, Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GavelIcon from '@mui/icons-material/Gavel';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PersonIcon from '@mui/icons-material/Person';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CopyrightIcon from '@mui/icons-material/Copyright';
import SecurityIcon from '@mui/icons-material/Security';
import UpdateIcon from '@mui/icons-material/Update';
import EmailIcon from '@mui/icons-material/Email';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '12px',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    '& svg': {
        marginRight: theme.spacing(1),
        color: theme.palette.primary.main
    }
}));

const TermsOfUsePage = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 4 }}>
                {/* Breadcrumbs navigation */}
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2 }}>
                    <Link underline="hover" color="inherit" href="/">Home</Link>
                    <Typography color="text.primary">Terms of Use</Typography>
                </Breadcrumbs>

                {/* Header section with highlight card */}
                <Card sx={{ mb: 4, backgroundColor: 'primary.light', color: 'primary.contrastText', borderRadius: '12px' }}>
                    <CardContent sx={{ textAlign: 'center', py: 5 }}>
                        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                            Terms of Use
                        </Typography>
                        <Typography variant="subtitle1" sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <EventNoteIcon sx={{ mr: 1 }} />
                            Last Updated: May 28, 2025
                        </Typography>
                        <Chip label="Official Document" color="primary" sx={{ fontWeight: 500 }} />
                    </CardContent>
                </Card>

                <StyledPaper elevation={3}>
                    <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                        Welcome to our Typing Test Application. By accessing or using our service, you agree to be bound by these Terms of Use. Please read them carefully.
                    </Typography>

                    <Divider sx={{ my: 3 }} />

                    {/* Using accordions for each section */}
                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <SectionTitle variant="h5">
                                <GavelIcon /> 1. Acceptance of Terms
                            </SectionTitle>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Card variant="outlined" sx={{ mb: 2 }}>
                                <CardContent>
                                    <Typography variant="body1">
                                        By accessing or using our Typing Test Application, you agree to these Terms of Use and our Privacy Policy. If you do not agree with any part of these terms, you may not access or use our service.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <SectionTitle variant="h5">
                                <PersonIcon /> 2. User Accounts
                            </SectionTitle>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Card variant="outlined" sx={{ height: '100%' }}>
                                        <CardContent>
                                            <Typography variant="h6" color="primary" gutterBottom>
                                                Account Accuracy
                                            </Typography>
                                            <Typography variant="body2">
                                                When you create an account with us, you guarantee that the information you provide is accurate, complete, and current. Inaccurate, incomplete, or obsolete information may result in the termination of your account.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Card variant="outlined" sx={{ height: '100%' }}>
                                        <CardContent>
                                            <Typography variant="h6" color="primary" gutterBottom>
                                                Account Security
                                            </Typography>
                                            <Typography variant="body2">
                                                You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <SectionTitle variant="h5">
                                <ContentPasteIcon /> 3. User Content and Conduct
                            </SectionTitle>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Card variant="outlined" sx={{ mb: 2 }}>
                                <CardContent>
                                    <Typography variant="body1" paragraph>
                                        Users may submit content such as test results, profiles, and comments. You retain all rights to your content, but grant us a license to use, modify, and display it in connection with our service.
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                        You agree not to use our service for any illegal or unauthorized purpose, or to violate any laws in your jurisdiction.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <SectionTitle variant="h5">
                                <CopyrightIcon /> 4. Intellectual Property
                            </SectionTitle>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Card variant="outlined" sx={{ bgcolor: 'info.light', color: 'info.contrastText' }}>
                                <CardContent>
                                    <Typography variant="body1">
                                        Our service and its original content, features, and functionality are owned by the Typing Test Application and are protected by international copyright, trademark, and other intellectual property laws.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <SectionTitle variant="h5">
                                <SecurityIcon /> 5. Limitation of Liability
                            </SectionTitle>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Card variant="outlined" sx={{ bgcolor: 'warning.light' }}>
                                <CardContent>
                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                        In no event shall the Typing Test Application, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <SectionTitle variant="h5">
                                <UpdateIcon /> 6. Changes to Terms
                            </SectionTitle>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1" paragraph>
                                We reserve the right to modify or replace these Terms of Use at any time. If a revision is material, we will provide at least 30 days' notice before any new terms take effect. What constitutes a material change will be determined at our sole discretion.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <SectionTitle variant="h5">
                                <EmailIcon /> 7. Contact Information
                            </SectionTitle>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Card sx={{ bgcolor: 'background.paper', p: 2, borderRadius: 2 }}>
                                <CardContent>
                                    <Typography variant="body1">
                                        If you have any questions about these Terms of Use, please contact us at:
                                    </Typography>
                                    <Box mt={2}>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            Email: support@typingtestapp.com
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </AccordionDetails>
                    </Accordion>

                    <Box mt={4} pb={2} textAlign="center">
                        <Divider sx={{ mb: 3 }} />
                        <Typography variant="body2" color="text.secondary">
                            Last updated: May 28, 2025
                        </Typography>
                    </Box>
                </StyledPaper>
            </Box>
        </Container>
    );
};

export default TermsOfUsePage;