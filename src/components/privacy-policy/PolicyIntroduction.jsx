import { Typography, Divider } from '@mui/material';
import { StyledPaper } from './PolicyStyles';
import { policyColors } from './policyColors';

const PolicyIntroduction = ({ children }) => {
    return (
        <StyledPaper elevation={3}>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: policyColors.text }}>
                Welcome to the Typing Test Application. We are committed to protecting your privacy and providing a safe user experience.
                This Privacy Policy explains how we collect, use, and safeguard your information when you use our application.
            </Typography>
            <Divider sx={{ my: 3 }} />
            {children}
        </StyledPaper>
    );
};

export default PolicyIntroduction;