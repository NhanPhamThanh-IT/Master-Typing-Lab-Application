/**
 * @fileoverview Main layout component for the Typing Test Application.
 * This component serves as the application's primary layout wrapper providing
 * consistent structure across all pages. It includes:
 * - A lazily loaded header component at the top
 * - A sidebar for navigation
 * - A main content area that renders child routes via React Router's Outlet
 * 
 * The layout uses a flex column design to ensure the footer stays at the bottom
 * regardless of content height, and implements loading states for asynchronously 
 * loaded components.
 * 
 * @module components/layout
 * @requires react
 * @requires react-router-dom
 * @requires @mui/material
 * @requires ./Header/index
 * @requires ./Sidebar/index
 */

import {
    Outlet
} from 'react-router-dom';
import {
    Box,
    CircularProgress,
    useTheme
} from '@mui/material';
import {
    lazy,
    Suspense,
    useState
} from 'react';

/**
 * Lazily loaded Header component to improve initial page load performance
 * @type {React.LazyExoticComponent<React.ComponentType>}
 */
const Header = lazy(() => import('./Header/index'));

/**
 * Lazily loaded Sidebar component
 * @type {React.LazyExoticComponent<React.ComponentType>}
 */
const Sidebar = lazy(() => import('./Sidebar/index'));

/**
 * Layout component that provides the main application structure.
 * Wraps child routes with consistent header, sidebar and manages
 * loading states for these components.
 * 
 * @component
 * @returns {JSX.Element} A layout component with header, sidebar, and content area
 * 
 * @example
 * // In a router configuration
 * <Route path="/" element={<Layout />}>
 *   <Route index element={<HomePage />} />
 *   <Route path="practice" element={<PracticePage />} />
 * </Route>
 */
const Layout = () => {
    const theme = useTheme();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Suspense fallback={
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress />
                </Box>
            }>
                {/* Header now has higher z-index to appear in front of sidebar */}
                <Box sx={{ position: 'relative', zIndex: theme.zIndex.drawer + 1 }}>
                    <Header onMenuClick={handleSidebarToggle} />
                </Box>
            </Suspense>

            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Suspense fallback={<CircularProgress sx={{ m: 2 }} />}>
                    <Sidebar
                        open={sidebarOpen}
                        onToggle={handleSidebarToggle}
                    />
                </Suspense>

                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        width: '100%',
                        ml: { md: '240px' } // Offset content by sidebar width on desktop
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default Layout;