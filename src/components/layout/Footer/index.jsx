import {
    Box,
    Typography
} from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ py: 3, bgcolor: 'background.paper', textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} TypeMaster - Improve Your Typing Skills
            </Typography>
        </Box>
    )
};

export default Footer;