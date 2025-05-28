import {
    Link as RouterLink
} from 'react-router-dom';
import {
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Card,
    CardContent,
    Grid,
    Button,
    Stack,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { SectionTitle } from './PolicyStyles';

// Component con renderTextContent
const TextContent = ({ text }) => (
    <Typography variant="body1" paragraph sx={{ color: '#333333' }}>
        {text}
    </Typography>
);

// Component con renderCardContent
const SecurityCardContent = ({ text }) => (
    <>
        <Card variant="outlined" sx={{ backgroundColor: 'transparent', mb: 2, border: '2px solid #3f51b5' }}>
            <CardContent>
                <Typography variant="body1" sx={{ color: '#333333', textAlign: 'justify' }}>
                    {text}
                </Typography>
            </CardContent>
        </Card>
        <Typography variant="body2" sx={{ color: '#757575' }}>
            Note: No method of transmission over the Internet or electronic storage is 100% secure.
        </Typography>
    </>
);

// Component con renderListContent
const ListContent = ({ items }) => (
    <List>
        {items.map((item, index) => (
            <ListItem key={index}>
                <ListItemIcon>
                    <CheckCircleIcon sx={{ color: '#3f51b5' }} />
                </ListItemIcon>
                <ListItemText primary={item} sx={{ color: '#333333' }} />
            </ListItem>
        ))}
    </List>
);

// Component con renderGridContent
const GridContent = ({ items }) => (
    <Grid container spacing={2}>
        {items.map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card variant="outlined" sx={{ height: '100%', border: '2px solid #3f51b5' }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ color: '#3f51b5', fontWeight: 600 }} gutterBottom>
                            {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#333333', textAlign: 'justify' }}>
                            {item.description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
);

const ContactContent = () => (
    <Card
        sx={{
            bgcolor: 'background.paper',
            px: { xs: 2, md: 4 },
            borderRadius: 3,
            border: '2px solid',
            borderColor: 'primary.main',
            boxShadow: 3,
        }}
    >
        <CardContent>
            <Stack spacing={2} alignItems="center" textAlign="center">
                <Typography
                    variant="h6"
                    sx={{
                        color: 'text.secondary',
                        fontWeight: 500,
                    }}
                >
                    If you have any questions about this Privacy Policy or our practices, please contact us at
                </Typography>

                <Button
                    component={RouterLink}
                    to="/contact-us"
                    variant="contained"
                    size="large"
                    sx={{
                        borderRadius: 2,
                        textTransform: 'none',
                        fontWeight: 600,
                    }}
                >
                    Click To Get Contact
                </Button>
            </Stack>
        </CardContent>
    </Card>
);

// Component chính PolicySection
const PolicySection = ({ title, icon, content, contentType }) => {
    // Render nội dung khác nhau dựa trên contentType
    const renderContent = () => {
        switch (contentType) {
            case 'text':
                return <TextContent text={content} />;
            case 'security':
                return <SecurityCardContent text={content} />;
            case 'list':
                return <ListContent items={content} />;
            case 'grid':
                return <GridContent items={content} />;
            case 'contact':
                return <ContactContent />;
            default:
                return <TextContent text={content} />;
        }
    };

    const Icon = icon;

    return (
        <Accordion defaultExpanded sx={{ border: 'none', boxShadow: 'none', '&:before': { display: 'none' } }}>
            <AccordionSummary
                disabled={true}
                sx={{
                    backgroundColor: '#3f51b5',
                    borderRadius: '8px',
                    '&.Mui-disabled': {
                        opacity: 1,
                    }
                }}
            >
                <SectionTitle variant="h6">
                    <Icon sx={{ color: '#3f51b5' }} /> {title}
                </SectionTitle>
            </AccordionSummary>
            <AccordionDetails>
                {renderContent()}
            </AccordionDetails>
        </Accordion>
    );
};

export default PolicySection;