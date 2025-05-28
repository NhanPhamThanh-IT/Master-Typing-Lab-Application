import { Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { termsColors } from './termsColors';

export const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: '10px',
    backgroundColor: termsColors.paper,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
}));

export const SectionTitle = ({ children }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5" component="h2" sx={{ 
            fontWeight: 600,
            color: termsColors.primary,
            borderBottom: `2px solid ${termsColors.primary}`,
            paddingBottom: '4px',
        }}>
            {children}
        </Typography>
    </Box>
);
