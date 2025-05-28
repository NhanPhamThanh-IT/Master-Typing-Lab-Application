import {
    Suspense,
    lazy
} from 'react';
import {
    Container,
    Box,
    Skeleton,
} from '@mui/material';
import { termsOfUseSections } from '@data/termsOfUseData';

/**
 * @module TermsOfUsePage
 * @description A React component that renders the Terms of Use page with lazy-loaded sections
 * for improved performance and load times.
 */

/**
 * Lazily loaded terms components to reduce initial bundle size
 */
const TermsHeader = lazy(() => import('@components/terms-of-use/TermsHeader'));
const TermsIntroduction = lazy(() => import('@components/terms-of-use/TermsIntroduction'));
const TermsSection = lazy(() => import('@components/terms-of-use/TermsSection'));

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
 * Skeleton placeholder displayed during lazy-loading of terms sections
 * @function SectionLoading
 * @returns {React.Element} A Material-UI Skeleton component styled for terms sections
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
 * Main Terms of Use component that orchestrates the layout and rendering of all terms sections.
 * Uses React Suspense for code-splitting and displaying fallback UI during loading.
 * 
 * @function TermsOfUsePage
 * @returns {React.Element} The complete terms of use page with header and terms sections
 */
const TermsOfUsePage = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 4 }}>
                <Suspense fallback={<HeaderLoading />}>
                    <TermsHeader />
                </Suspense>

                <Suspense fallback={<IntroductionLoading />}>
                    <TermsIntroduction>
                        {termsOfUseSections.map((section, index) => (
                            <Suspense key={index} fallback={<SectionLoading />}>
                                <TermsSection
                                    title={section.title}
                                    icon={section.icon}
                                    content={section.content}
                                    contentType={section.contentType}
                                />
                            </Suspense>
                        ))}
                    </TermsIntroduction>
                </Suspense>
            </Box>
        </Container>
    );
};

// Export main component with lazy loading
export default TermsOfUsePage;