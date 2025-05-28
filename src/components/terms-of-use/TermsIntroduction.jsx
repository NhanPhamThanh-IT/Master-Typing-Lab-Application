import { Typography, Divider } from '@mui/material';
import { StyledPaper } from './TermsStyles.jsx';
import { termsColors } from './termsColors';

const TermsIntroduction = ({ children }) => {
    return (
        <StyledPaper elevation={3}>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: termsColors.text }}>
                Please read these Terms of Use carefully before using the Typing Test Application.
                By accessing or using our application, you agree to be bound by these terms and all applicable laws and regulations.
                If you disagree with any part of the terms, you may not access or use our application.
            </Typography>
            <Divider sx={{ my: 3 }} />
            {children}
        </StyledPaper>
    );
};

export default TermsIntroduction;
