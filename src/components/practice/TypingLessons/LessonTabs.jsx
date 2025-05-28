import { Box, Paper, Tab, Tabs } from '@mui/material';

const LessonTabs = ({ lessonCategories, activeTab, handleTabChange, colors }) => {
    return (
        <Paper
            elevation={2}
            sx={{
                mb: 5,
                borderRadius: 2,
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                
            }}
        >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    textColor="primary"
                    indicatorColor="primary"
                    sx={{
                        '& .MuiTab-root': {
                            py: 2,
                            fontSize: '1rem',
                        },
                        '& .MuiTabs-indicator': {
                            backgroundColor: lessonCategories[activeTab]?.color || colors.primary
                        }
                    }}
                >
                    {lessonCategories.map((category, index) => (
                        <Tab
                            key={index}
                            label={category.title}
                            icon={category.icon}
                            iconPosition="start"
                            sx={{
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: category.color,
                                }
                            }}
                        />
                    ))}
                </Tabs>
            </Box>
        </Paper>
    );
};

export default LessonTabs;