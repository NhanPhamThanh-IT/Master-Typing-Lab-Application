import React from 'react';
import { Container, Typography, Box, Divider, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: theme.spacing(2),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
}));

const TermsOfUsePage = () => {
    return (
        <Container maxWidth="lg">
            <StyledPaper elevation={0}>
                <Typography variant="h4" component="h1" gutterBottom fontWeight={700}>
                    Terms of Use
                </Typography>
                <Divider sx={{ mb: 3 }} />

                <Typography variant="body1" paragraph>
                    Welcome to our Typing Test Application. By accessing or using our service, you agree to be bound by these Terms of Use. Please read them carefully.
                </Typography>

                <SectionTitle variant="h6">
                    1. Acceptance of Terms
                </SectionTitle>
                <Typography variant="body1" paragraph>
                    By accessing or using our Typing Test Application, you agree to these Terms of Use and our Privacy Policy. If you do not agree with any part of these terms, you may not access or use our service.
                </Typography>

                <SectionTitle variant="h6">
                    2. User Accounts
                </SectionTitle>
                <Typography variant="body1" paragraph>
                    When you create an account with us, you guarantee that the information you provide is accurate, complete, and current. Inaccurate, incomplete, or obsolete information may result in the termination of your account.
                </Typography>
                <Typography variant="body1" paragraph>
                    You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account.
                </Typography>

                <SectionTitle variant="h6">
                    3. User Content and Conduct
                </SectionTitle>
                <Typography variant="body1" paragraph>
                    Users may submit content such as test results, profiles, and comments. You retain all rights to your content, but grant us a license to use, modify, and display it in connection with our service.
                </Typography>
                <Typography variant="body1" paragraph>
                    You agree not to use our service for any illegal or unauthorized purpose, or to violate any laws in your jurisdiction.
                </Typography>

                <SectionTitle variant="h6">
                    4. Intellectual Property
                </SectionTitle>
                <Typography variant="body1" paragraph>
                    Our service and its original content, features, and functionality are owned by the Typing Test Application and are protected by international copyright, trademark, and other intellectual property laws.
                </Typography>

                <SectionTitle variant="h6">
                    5. Limitation of Liability
                </SectionTitle>
                <Typography variant="body1" paragraph>
                    In no event shall the Typing Test Application, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses.
                </Typography>

                <SectionTitle variant="h6">
                    6. Changes to Terms
                </SectionTitle>
                <Typography variant="body1" paragraph>
                    We reserve the right to modify or replace these Terms of Use at any time. If a revision is material, we will provide at least 30 days' notice before any new terms take effect. What constitutes a material change will be determined at our sole discretion.
                </Typography>

                <SectionTitle variant="h6">
                    7. Contact Information
                </SectionTitle>
                <Typography variant="body1" paragraph>
                    If you have any questions about these Terms of Use, please contact us at support@typingtestapp.com.
                </Typography>

                <Box mt={4} pb={2}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        Last updated: May 28, 2025
                    </Typography>
                </Box>
            </StyledPaper>
        </Container>
    );
};

export default TermsOfUsePage;