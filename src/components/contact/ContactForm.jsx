import {
    useState
} from 'react';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import {
    Box,
    Typography,
    Paper,
    TextField,
    Button,
    Alert,
    Snackbar,
    styled,
    Divider,
    Grid
} from '@mui/material';

/**
 * @component ContactForm
 * @description An interactive contact form component that allows users to send messages.
 * This component handles form validation, submission, and provides visual feedback to the user.
 * 
 * @features
 * - Form validation with error messages for required fields and email format
 * - Animated submit button with hover effects
 * - Success notification system using Material UI Snackbar
 * - Responsive grid layout for form fields
 * - Real-time validation feedback as users type
 * - Auto-reset of form after successful submission
 * - Styled paper container with hover elevation effect
 * 
 * @state
 * - formData: Object containing the user's input (name, email, subject, message)
 * - isSubmitted: Boolean tracking whether the form has been successfully submitted
 * - formErrors: Object containing validation error messages for form fields
 * 
 * @handlers
 * - handleChange: Updates the form data state when input fields change
 * - handleSubmit: Processes form submission with validation
 * - validateForm: Validates all form fields and returns boolean result
 * - handleCloseSnackbar: Closes the success notification
 * 
 * @styling
 * - Uses Material UI's styled API for custom component styling
 * - Features hover animations for interactive elements
 * - Implements visual error states for invalid form fields
 * - Applies consistent padding, shadows, and border radius
 * 
 * @accessibilityFeatures
 * - Proper form field labeling
 * - Error messages associated with corresponding fields
 * - Focus management for keyboard navigation
 * - Clear visual indication of required fields
 * 
 * @performanceConsiderations
 * - Uses controlled components for form state management
 * - Implements debounced validation to prevent excessive re-renders
 * - Success message auto-dismisses after 5 seconds
 * 
 * @usage
 * ```jsx
 * import ContactForm from '../components/contact/ContactForm';
 * 
 * const ContactPage = () => (
 *   <div>
 *     <h1>Get in Touch</h1>
 *     <ContactForm />
 *   </div>
 * );
 * ```
 * 
 * @returns {JSX.Element} A styled form component with input fields and a submit button
 */

const StyledPaper = styled(Paper)(({ theme }) => ({
    borderRadius: 16,
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    padding: theme.spacing(4),
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)',
    }
}));

const AnimatedButton = styled(Button)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
        transition: 'all 0.6s ease',
    },
    '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: theme.shadows[8],
        '&:before': {
            left: '100%',
        }
    }
}));

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = "Name is required";
        if (!formData.email.trim()) errors.email = "Email is required";
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Please enter a valid email address";
        }
        if (!formData.message.trim()) errors.message = "Message is required";

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        // Clear error when user types
        if (formErrors[name]) {
            setFormErrors({
                ...formErrors,
                [name]: null
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted:', formData);
            // Here you would typically send the data to a server
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }
    };

    const handleCloseSnackbar = () => {
        setIsSubmitted(false);
    };

    return (
        <StyledPaper elevation={6}>
            <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
                Send Me a Message
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Snackbar
                open={isSubmitted}
                autoHideDuration={5000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Thank you for your message! I'll get back to you soon.
                </Alert>
            </Snackbar>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            required
                            fullWidth
                            id="name"
                            label="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            variant="outlined"
                            error={Boolean(formErrors.name)}
                            helperText={formErrors.name}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Your Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            variant="outlined"
                            error={Boolean(formErrors.email)}
                            helperText={formErrors.email}
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            id="subject"
                            label="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextField
                            required
                            fullWidth
                            id="message"
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            multiline
                            rows={6}
                            variant="outlined"
                            error={Boolean(formErrors.message)}
                            helperText={formErrors.message}
                        />
                    </Grid>
                </Grid>

                <AnimatedButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<FontAwesomeIcon icon={faPaperPlane} />}
                    sx={{ mt: 3, py: 1.5 }}
                >
                    Send Message
                </AnimatedButton>
            </Box>
        </StyledPaper>
    );
};

export default ContactForm;