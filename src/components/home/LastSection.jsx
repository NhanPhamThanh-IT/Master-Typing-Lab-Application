import {
    Box,
    Button,
    Container,
    Typography,
    Stack
} from '@mui/material';
import {
    Link as RouterLink
} from 'react-router-dom';

const buttonStyles = {
    mt: 4,
    px: 6,
    py: 1.5,
    fontSize: '1.1rem',
    borderRadius: 2,
    backgroundColor: '#4dabf5',
    color: '#ffffff',
    fontWeight: 'bold',
    boxShadow: '0 4px 12px rgba(77, 171, 245, 0.4)',
    '&:hover': {
        backgroundColor: '#2196f3',
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 14px rgba(77, 171, 245, 0.5)',
    },
    transition: 'all 0.2s',
};

// Box section style
const sectionStyles = {
    py: 10,
    mb: 10,
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    color: 'white',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
};

/**
* LastSection Component
* 
* This component renders the final section of the home page, encouraging users to start their typing journey.
* It includes a motivational heading, a subheading, and a call-to-action button.
* 
* Features:
* - Displays a heading: "Ready to Improve Your Typing Skills?".
* - Provides a subheading with motivational text.
* - Includes a call-to-action button that navigates users to the main typing test page.
* 
* Props:
* None
* 
* Styles:
* - `sectionStyles`: Defines the background gradient, padding, and border styling for the section.
* - `buttonStyles`: Customizes the appearance and hover effects of the call-to-action button.
* 
* Dependencies:
* - Material-UI components: Box, Button, Container, Typography, Stack.
* - React Router: RouterLink for navigation.
* 
* Usage:
* ```jsx
* import LastSection from './LastSection';
* 
* const HomePage = () => (
*   <div>
*     <LastSection />
*   </div>
* );
* 
* export default HomePage;
* ```
* 
* Notes:
* - Ensure the `RouterLink` component is properly configured for navigation.
* - Customize the styles using Material-UI's sx prop if needed.
* - The button redirects users to the `/main` route; ensure this route is defined in your application.
*/

const LastSection = () => {
    return (
        <Box sx={sectionStyles}>
            <Container maxWidth="md">
                <Stack spacing={5} alignItems="center" textAlign="center">
                    {/* Heading */}
                    <Typography
                        variant="h3"
                        component="h2"
                        fontWeight="bold"
                        color="white"
                        sx={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', mb: 1 }}
                    >
                        Ready to Improve Your Typing Skills?
                    </Typography>

                    {/* Subheading */}
                    <Typography
                        variant="h6"
                        color="rgba(255, 255, 255, 0.9)"
                        sx={{ maxWidth: 650 }}
                    >
                        Join thousands of users who have enhanced their typing speed and accuracy.
                        Start practicing today and track your progress over time.
                    </Typography>

                    {/* Call to action button */}
                    <Button
                        component={RouterLink}
                        to="/main"
                        variant="contained"
                        size="large"
                        sx={buttonStyles}
                    >
                        Start Your Typing Journey
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default LastSection;