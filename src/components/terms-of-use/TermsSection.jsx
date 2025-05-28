import {
    Typography,
    Grid,
    Paper,
    Box,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
    SectionTitle
} from './TermsStyles.jsx';
import {
    termsColors
} from './termsColors';

// Component for text content
const TextContent = ({ text }) => (
    <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
            <Paper elevation={0} sx={{
                p: 2,
                height: '100%',
            }}>
                <Typography variant="body1" paragraph sx={{ color: termsColors.text, textAlign: 'center' }}>
                    {text}
                </Typography>
            </Paper>
        </Grid>
    </Grid>
);

// Component for card content
const SecurityCardContent = ({ text }) => (
    <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
            <Paper elevation={1} sx={{
                p: 2,
                height: '100%',
                transition: 'all 0.3s ease',
                border: `2px solid ${termsColors.primary}`,
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                }
            }}>
                <Typography variant="body1" sx={{ color: termsColors.text, textAlign: 'justify' }}>
                    {text}
                </Typography>
                <Typography variant="body2" sx={{ color: termsColors.textSecondary, mt: 2 }}>
                    Note: Please contact us if you have any questions about these terms.
                </Typography>
            </Paper>
        </Grid>
    </Grid>
);

// Component for list content
const ListContent = ({ items }) => (
    <Grid container spacing={2}>
        {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <Paper elevation={0} sx={{
                    p: 2,
                    height: '100%',
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <CheckCircleIcon sx={{ color: termsColors.primary, mr: 1 }} />
                        <Typography variant="body2" sx={{ color: termsColors.text }}>
                            {item}
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
        ))}
    </Grid>
);

// Component for grid content
const GridContent = ({ items }) => (
    <Grid container spacing={2}>
        {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <Paper
                    elevation={1}
                    sx={{
                        p: 2,
                        height: '100%',
                        transition: 'all 0.3s ease',
                        border: `2px solid ${termsColors.primary}`,
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        }
                    }}
                >
                    <Typography variant="h6" gutterBottom sx={{ color: termsColors.primary, fontWeight: 600 }}>
                        {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: termsColors.text }}>
                        {item.description}
                    </Typography>
                </Paper>
            </Grid>
        ))}
    </Grid>
);

// Component for questions content
const QuestionsContent = ({ items }) => (
    <Grid container spacing={2}>
        {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <Paper elevation={1} sx={{
                    p: 2,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    border: `2px solid ${termsColors.primary}`,
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    }
                }}>
                    <Typography variant="h6" gutterBottom sx={{ color: termsColors.primary, fontWeight: 600 }}>
                        {item.question}
                    </Typography>
                    <Typography variant="body2" sx={{ color: termsColors.text }}>
                        {item.answer}
                    </Typography>
                </Paper>
            </Grid>
        ))}
    </Grid>
);

const TermsSection = ({ title, content, contentType }) => {
    const getContent = () => {
        switch (contentType) {
            case 'text':
                return <TextContent text={content} />;
            case 'security':
                return <SecurityCardContent text={content} />;
            case 'list':
                return <ListContent items={content} />;
            case 'grid':
                return <GridContent items={content} />;
            case 'questions':
                return <QuestionsContent items={content} />;
            default:
                return <TextContent text={content} />;
        }
    };

    return (
        <Box sx={{ mb: 4 }}>
            <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SectionTitle>{title}</SectionTitle>
            </Box>
            {getContent()}
        </Box>
    );
};

export default TermsSection;
