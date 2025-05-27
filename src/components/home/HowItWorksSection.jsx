import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar
} from '@mui/material';

// Assets
import Image from '@assets/home-how-it-work.png';

// Hooks
import useLazyLoadImage from '@hooks/useLazyLoadImage';

const HowItWorksSection = () => {
  const loadedImage = useLazyLoadImage(Image);

  return (
    <Box sx={{ bgcolor: 'background.paper', py: 8, mb: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, mb: 6 }}
        >
          How It Works
        </Typography>

        <Grid container spacing={5} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3
            }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50 }}>1</Avatar>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Choose your test</Typography>
                  <Typography variant="body1" color="text.secondary">
                    Select from various typing tests - random texts, quotes, code samples or custom texts.
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50 }}>2</Avatar>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Type the text</Typography>
                  <Typography variant="body1" color="text.secondary">
                    Start typing and get real-time feedback on your speed, accuracy and errors.
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50 }}>3</Avatar>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Review your results</Typography>
                  <Typography variant="body1" color="text.secondary">
                    Analyze your performance with detailed statistics and identify areas for improvement.
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50 }}>4</Avatar>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Practice regularly</Typography>
                  <Typography variant="body1" color="text.secondary">
                    Consistency is key - practice daily to see significant improvements in your typing skills.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            }}>
              <img
                src={loadedImage}
                alt="Person typing on keyboard"
                style={{ width: '100%', display: 'block' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorksSection;