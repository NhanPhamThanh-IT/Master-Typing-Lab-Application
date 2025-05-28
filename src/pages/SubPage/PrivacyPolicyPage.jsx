import { Container, Typography, Box, Paper, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '8px',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
}));

const PrivacyPolicy = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 700 }}>
                    Privacy Policy
                </Typography>

                <Typography variant="subtitle1" color="text.secondary" align="center" sx={{ mb: 4 }}>
                    Last Updated: May 28, 2025
                </Typography>

                <StyledPaper elevation={3}>
                    <Typography variant="body1" paragraph>
                        Welcome to the Typing Test Application. We are committed to protecting your privacy and providing a safe user experience.
                        This Privacy Policy explains how we collect, use, and safeguard your information when you use our application.
                    </Typography>

                    <Divider sx={{ my: 3 }} />

                    <SectionTitle variant="h5">
                        Information We Collect
                    </SectionTitle>

                    <Typography variant="body1" paragraph>
                        <strong>Personal Information:</strong> When you create an account, we collect your email address, username, and password.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <strong>Usage Data:</strong> We collect information about how you use our application, including typing speed, accuracy,
                        test results, and practice frequency.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <strong>Technical Data:</strong> We automatically collect certain information when you visit our application,
                        including IP address, browser type, device information, and operating system.
                    </Typography>

                    <SectionTitle variant="h5">
                        How We Use Your Information
                    </SectionTitle>

                    <Typography variant="body1" component="ul" sx={{ pl: 4 }}>
                        <li>To provide, maintain, and improve our services</li>
                        <li>To personalize your experience and deliver content relevant to your interests</li>
                        <li>To track your progress and provide performance analytics</li>
                        <li>To communicate with you about updates, features, or support</li>
                        <li>To detect, prevent, and address technical issues or security concerns</li>
                    </Typography>

                    <SectionTitle variant="h5">
                        Data Security
                    </SectionTitle>

                    <Typography variant="body1" paragraph>
                        We implement appropriate security measures to protect your personal information from unauthorized access,
                        alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.
                        However, no method of transmission over the Internet or electronic storage is 100% secure.
                    </Typography>

                    <SectionTitle variant="h5">
                        Data Sharing and Disclosure
                    </SectionTitle>

                    <Typography variant="body1" paragraph>
                        We do not sell, trade, or otherwise transfer your personal information to external parties.
                        We may share aggregated, non-personal information for application improvement, research, or marketing purposes.
                    </Typography>

                    <SectionTitle variant="h5">
                        Your Rights
                    </SectionTitle>

                    <Typography variant="body1" paragraph>
                        You have the right to access, update, or delete your personal information. You can manage your account settings
                        or contact us directly to exercise these rights. You may also opt out of certain data collection features
                        through your account settings.
                    </Typography>

                    <SectionTitle variant="h5">
                        Children's Privacy
                    </SectionTitle>

                    <Typography variant="body1" paragraph>
                        Our services are not intended for individuals under the age of 13. We do not knowingly collect personal
                        information from children under 13. If we discover that a child under 13 has provided us with personal
                        information, we will promptly delete it.
                    </Typography>

                    <SectionTitle variant="h5">
                        Changes to This Privacy Policy
                    </SectionTitle>

                    <Typography variant="body1" paragraph>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                        Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this
                        Privacy Policy periodically for any changes.
                    </Typography>

                    <SectionTitle variant="h5">
                        Contact Us
                    </SectionTitle>

                    <Typography variant="body1" paragraph>
                        If you have any questions about this Privacy Policy or our practices, please contact us at:
                        <br />
                        <strong>Email:</strong> support@typingtestapp.com
                        <br />
                        <strong>Address:</strong> 123 Typing Street, Keyboard City, TC 12345
                    </Typography>
                </StyledPaper>
            </Box>
        </Container>
    );
};

export default PrivacyPolicy;