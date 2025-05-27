import {
  Box,
  CircularProgress
} from '@mui/material';
import {
  Suspense,
  lazy
} from 'react';

// Lazy load components
const HeroSection = lazy(() => import('@components/home/HeroSection'));
const FeaturesSection = lazy(() => import('@components/home/FeaturesSection'));
const HowItWorksSection = lazy(() => import('@components/home/HowItWorksSection'));
const TestimonialsSection = lazy(() => import('@components/home/TestimonialsSection'));
const LastSection = lazy(() => import('@components/home/LastSection'));

// Loading fallback component
const LoadingFallback = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
    <CircularProgress />
  </Box>
);

const HomePage = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Suspense fallback={<LoadingFallback />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <FeaturesSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <HowItWorksSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <LastSection />
      </Suspense>
    </Box>
  );
};

export default HomePage;