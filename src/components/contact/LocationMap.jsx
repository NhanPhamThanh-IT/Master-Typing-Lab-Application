import {
    Box,
    Typography,
    Paper,
    styled
} from '@mui/material';

/**
 * @component LocationMap
 * @description A visual map component that displays the geographical location with an embedded static Google Maps image.
 * This component provides users with a visual representation of a physical location along with overlay text information.
 * 
 * @features
 * - Embedded static Google Maps image showing a specific location
 * - Styled Paper container with consistent design language matching other components
 * - Elegant text overlay with location details
 * - Semi-transparent background for text overlay to ensure readability
 * - Responsive design that maintains aspect ratio and visual appeal at all screen sizes
 * 
 * @visualElements
 * - Static map image as the primary visual content
 * - Semi-transparent overlay bar at the bottom with location information
 * - Typography hierarchy for location name and additional details
 * - Rounded corners and shadow effects for visual consistency with other components
 * 
 * @technicalDetails
 * - Uses Google Maps Static API to render the map image
 * - Requires an API key for production deployment (currently using a placeholder key)
 * - Fixed height container with responsive width
 * - Image scales appropriately with objectFit: 'cover'
 * - Absolute positioning for the text overlay to ensure it stays anchored to the bottom
 * 
 * @implementationConsiderations
 * - The API key should be replaced with a valid Google Maps API key
 * - Consider implementing rate limiting or usage tracking for the API calls
 * - Could be extended to use the dynamic Google Maps JavaScript API for interactive features
 * - Map coordinates are currently hardcoded but could be made dynamic via props
 * 
 * @accessibilityFeatures
 * - Alternative text provided for the map image
 * - High contrast text on the dark overlay for readability
 * - Semantic HTML structure with proper heading levels
 * - Visual information is supplemented with text details
 * 
 * @performanceOptimizations
 * - Uses static map to reduce load time and bandwidth compared to interactive maps
 * - Image dimensions specified to prevent layout shifts during loading
 * - Limited API calls by using a static image rather than a dynamic map
 * 
 * @usage
 * ```jsx
 * import LocationMap from '../components/contact/LocationMap';
 * 
 * const ContactPage = () => (
 *   <div>
 *     <h1>Our Location</h1>
 *     <LocationMap />
 *   </div>
 * );
 * ```
 * 
 * @customization
 * - Location can be modified by changing the center parameter in the Google Maps URL
 * - Map style, zoom level, and size can be adjusted through URL parameters
 * - Overlay styling can be customized through the sx prop on the Box component
 * - Container height and border radius can be modified in the StyledPaper component
 * 
 * @securityConsiderations
 * - Google Maps API key should be restricted to specific domains and IP addresses
 * - Consider using environment variables to store the API key rather than hardcoding
 * - Implement proper error handling for cases when the map fails to load
 * 
 * @returns {JSX.Element} A styled Paper component containing a map image with location overlay
 */

const StyledPaper = styled(Paper)(({ theme }) => ({
    borderRadius: 16,
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    height: '300px',
    position: 'relative',
}));

const LocationMap = () => {
    return (
        <StyledPaper elevation={6}>
            <Box
                component="img"
                src="https://maps.googleapis.com/maps/api/staticmap?center=Ho+Chi+Minh+City,Vietnam&zoom=13&size=1200x300&key=YOUR_API_KEY"
                alt="Location Map"
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    p: 2
                }}
            >
                <Typography variant="h6">Ho Chi Minh City, Vietnam</Typography>
                <Typography variant="body2">District 1 • Center Area</Typography>
            </Box>
        </StyledPaper>
    );
};

export default LocationMap;