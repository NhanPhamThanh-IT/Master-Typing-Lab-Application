import {
    Suspense,
    lazy
} from 'react';
import {
    Container,
    Box,
    Skeleton,
} from '@mui/material';
import { privacyPolicySections } from '@data/privacyPolicyData';

/**
 * @module PrivacyPolicyPage
 * @description A React component that renders the privacy policy page with lazy-loaded sections
 * for improved performance and load times.
 */

/**
 * Lazily loaded policy components to reduce initial bundle size
 * @see {@link PolicyHeader} - Component for displaying the policy page header
 * @see {@link PolicyIntroduction} - Component for wrapping the policy introduction and sections
 * @see {@link PolicySection} - Component for rendering individual policy sections
 */
const PolicyHeader = lazy(() => import('@components/privacy-policy/PolicyHeader'));
const PolicyIntroduction = lazy(() => import('@components/privacy-policy/PolicyIntroduction'));
const PolicySection = lazy(() => import('@components/privacy-policy/PolicySection'));

/**
 * Skeleton placeholder displayed during lazy-loading of the header component
 * @function HeaderLoading
 * @returns {React.Element} A Material-UI Skeleton component styled for the header
 */
const HeaderLoading = () => (
    <Skeleton
        variant="rectangular"
        width="100%"
        height={180}
        sx={{ borderRadius: '12px', mb: 4 }}
        animation="wave"
    />
);

/**
 * Skeleton placeholder displayed during lazy-loading of policy sections
 * @function SectionLoading
 * @returns {React.Element} A Material-UI Skeleton component styled for policy sections
 */
const SectionLoading = () => (
    <Skeleton
        variant="rectangular"
        width="100%"
        height={100}
        sx={{ borderRadius: '8px', mb: 2 }}
        animation="wave"
    />
);

/**
 * Complex skeleton placeholder displayed during lazy-loading of the introduction section
 * Creates multiple skeleton elements to represent the introduction and child sections
 * @function IntroductionLoading
 * @returns {React.Element} A group of Material-UI Skeleton components
 */
const IntroductionLoading = () => (
    <>
        <Skeleton
            variant="rectangular"
            width="100%"
            height={80}
            sx={{ borderRadius: '8px', mb: 3 }}
            animation="wave"
        />
        {[...Array(5)].map((_, index) => (
            <SectionLoading key={index} />
        ))}
    </>
);

/**
 * Main privacy policy component that orchestrates the layout and rendering of all policy sections.
 * Uses React Suspense for code-splitting and displaying fallback UI during loading.
 * 
 * @function PrivacyPolicy
 * @returns {React.Element} The complete privacy policy page with header and policy sections
 */
const PrivacyPolicy = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 4 }}>
                <Suspense fallback={<HeaderLoading />}>
                    <PolicyHeader />
                </Suspense>

                <Suspense fallback={<IntroductionLoading />}>
                    <PolicyIntroduction>
                        {privacyPolicySections.map((section, index) => (
                            <Suspense key={index} fallback={<SectionLoading />}>
                                <PolicySection
                                    title={section.title}
                                    icon={section.icon}
                                    content={section.content}
                                    contentType={section.contentType}
                                />
                            </Suspense>
                        ))}
                    </PolicyIntroduction>
                </Suspense>
            </Box>
        </Container>
    );
};

// Export main component with lazy loading
export default PrivacyPolicy;