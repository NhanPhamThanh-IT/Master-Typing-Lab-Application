import {
  Container,
  Typography,
  Grid,
  Paper
} from '@mui/material';
import {
  UserIcon
} from 'lucide-react';

// Testimonial data array
const testimonials = [
  {
    quote: "After using this platform for just 3 weeks, my typing speed increased from 45 WPM to over 70 WPM. The real-time feedback was crucial for my improvement.",
    author: "Michael S., Software Developer"
  },
  {
    quote: "The variety of texts and progression system kept me motivated. I now make far fewer mistakes when writing emails and reports at work.",
    author: "Jennifer K., Content Writer"
  },
  {
    quote: "As a student, this has saved me so much time on assignments. I can now type my thoughts almost as quickly as I think them!",
    author: "David L., University Student"
  }
];

// Single testimonial card component
const TestimonialCard = ({ quote, author }) => (
  <Grid size={{ xs: 12, md: 4 }}>
    <Paper elevation={2} sx={{ p: 4, height: '100%', textAlign: 'left' }}>
      <UserIcon size={30} style={{ marginBottom: '16px', color: '#9c27b0' }} />
      <Typography variant="body1" paragraph sx={{ fontStyle: 'italic' }}>
        "{quote}"
      </Typography>
      <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 600 }}>
        - {author}
      </Typography>
    </Paper>
  </Grid>
);

// Main component
const TestimonialsSection = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', mb: 10 }}>
      {/* Section header */}
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{ fontWeight: 700, mb: 1 }}
      >
        User Success Stories
      </Typography>

      <Typography variant="h6" sx={{ mb: 6, color: 'text.secondary' }}>
        See what our users have achieved with consistent practice
      </Typography>

      {/* Testimonials grid */}
      <Grid container spacing={4}>
        {testimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            quote={item.quote}
            author={item.author}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default TestimonialsSection;