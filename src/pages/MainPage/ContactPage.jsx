import React, { Suspense, lazy } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Skeleton,
    CircularProgress
} from '@mui/material';

// Lazy loaded components
const ContactForm = lazy(() => import('../../components/contact/ContactForm'));
const ContactInfo = lazy(() => import('../../components/contact/ContactInfo'));
const SocialLinks = lazy(() => import('../../components/contact/SocialLinks'));
const AvailabilitySchedule = lazy(() => import('../../components/contact/AvailabilitySchedule'));
const EventsSection = lazy(() => import('../../components/contact/EventsSection'));
const LocationMap = lazy(() => import('../../components/contact/LocationMap'));

// Loading placeholders
const FormSkeleton = () => (
    <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Skeleton variant="text" width="40%" height={40} />
        <Skeleton variant="rectangular" height={56} sx={{ mt: 2, mb: 3 }} />
        <Skeleton variant="rectangular" height={56} sx={{ mb: 3 }} />
        <Skeleton variant="rectangular" height={120} sx={{ mb: 3 }} />
        <Skeleton variant="rectangular" height={50} width="100%" />
    </Box>
);

const InfoSkeleton = () => (
    <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Skeleton variant="text" width="60%" height={40} />
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, mb: 2 }}>
            <Skeleton variant="circular" width={50} height={50} sx={{ mr: 2 }} />
            <Box sx={{ width: '100%' }}>
                <Skeleton variant="text" width="30%" />
                <Skeleton variant="text" width="60%" />
            </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Skeleton variant="circular" width={50} height={50} sx={{ mr: 2 }} />
            <Box sx={{ width: '100%' }}>
                <Skeleton variant="text" width="30%" />
                <Skeleton variant="text" width="60%" />
            </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Skeleton variant="circular" width={50} height={50} sx={{ mr: 2 }} />
            <Box sx={{ width: '100%' }}>
                <Skeleton variant="text" width="30%" />
                <Skeleton variant="text" width="60%" />
            </Box>
        </Box>
    </Box>
);

const ContactPage = () => {
    return (
        <Box sx={{
            bgcolor: 'background.default',
            minHeight: '100vh',
            py: 6,
            color: 'text.primary'
        }}>
            <Container maxWidth="xl">
                <Box sx={{
                    textAlign: 'center',
                    mb: 6,
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-15px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '80px',
                        height: '4px',
                        backgroundColor: 'primary.main',
                        borderRadius: '2px'
                    }
                }}>
                    <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
                        Contact Me
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
                        Feel free to reach out if you have any questions or would like to collaborate.
                        I'm always open to discussing new projects, creative ideas or opportunities.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {/* Left Column */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            {/* Contact Information */}
                            <Suspense fallback={<InfoSkeleton />}>
                                <ContactInfo />
                            </Suspense>

                            {/* Availability Schedule */}
                            <Suspense fallback={<InfoSkeleton />}>
                                <AvailabilitySchedule />
                            </Suspense>

                            {/* Social Links */}
                            <Suspense fallback={<InfoSkeleton />}>
                                <SocialLinks />
                            </Suspense>
                        </Box>
                    </Grid>

                    {/* Right Column */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            {/* Contact Form */}
                            <Suspense fallback={<FormSkeleton />}>
                                <ContactForm />
                            </Suspense>

                            {/* Events Section */}
                            <Suspense fallback={<InfoSkeleton />}>
                                <EventsSection />
                            </Suspense>
                        </Box>
                    </Grid>
                </Grid>

                {/* Map Section */}
                <Box sx={{ mt: 5 }}>
                    <Suspense fallback={
                        <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.paper', borderRadius: 2 }}>
                            <CircularProgress />
                        </Box>
                    }>
                        <LocationMap />
                    </Suspense>
                </Box>
            </Container>
        </Box>
    );
};

export default ContactPage;