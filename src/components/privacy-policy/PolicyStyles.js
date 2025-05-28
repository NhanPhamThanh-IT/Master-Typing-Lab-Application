import { styled } from '@mui/material/styles';
import { Typography, Paper } from '@mui/material';
import { policyColors } from './policyColors';

export const StyledPaper = styled(Paper)(() => ({
    padding: '32px',
    marginTop: '24px',
    marginBottom: '24px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '12px',
    backgroundColor: policyColors.background,
}));

export const SectionTitle = styled(Typography)(() => ({
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    '& svg': {
        marginRight: '8px',
        color: 'white',
    }
}));