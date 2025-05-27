import {
    useState,
    useEffect
} from 'react';

/**
 * A custom React hook that lazy loads an image.
 * 
 * This hook creates a new Image object and sets its source to the provided URL.
 * It tracks the loading state of the image and returns the source URL only after
 * the image has been successfully loaded. This helps prevent displaying broken images
 * and can be used to implement loading states for images.
 * 
 * @param {string} src - The URL of the image to be lazy loaded.
 * @returns {string|null} The source URL if the image has finished loading, otherwise null.
 * 
 * @example
 * // Basic usage
 * function ImageComponent({ imageUrl }) {
 *   const loadedSrc = useLazyLoadImage(imageUrl);
 *   
 *   return loadedSrc ? (
 *     <img src={loadedSrc} alt="Lazy loaded image" />
 *   ) : (
 *     <div>Loading...</div>
 *   );
 * }
 * 
 * @example
 * // With fallback image
 * function ImageWithFallback({ imageUrl, fallbackUrl }) {
 *   const loadedSrc = useLazyLoadImage(imageUrl);
 *   
 *   return <img src={loadedSrc || fallbackUrl} alt="Image with fallback" />;
 * }
 */
const useLazyLoadImage = (src) => {
    const [sourceLoaded, setSourceLoaded] = useState(null);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setSourceLoaded(src);
    }, [src]);

    return sourceLoaded;
};

export default useLazyLoadImage;