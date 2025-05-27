import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    useScrollTrigger,
    Slide,
    IconButton,
    useMediaQuery,
    Menu,
    MenuItem,
    useTheme
} from '@mui/material';
import { useState } from 'react';
import {
    Keyboard as KeyboardIcon
} from 'lucide-react';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Link as RouterLink,
    useLocation
} from 'react-router-dom';

// Constants
import routePaths from '@constants/routePaths.js';
import TEXT from '@constants/textConstants.js';

const navItems = [
    {
        label: 'Home',
        path: routePaths.index,
    },
    {
        label: 'Practice',
        path: routePaths.practice,
    },
    {
        label: 'Contact',
        path: routePaths.contactUs,
    },
    {
        label: 'Github',
        path: 'https://github.com/NhanPhamThanh-IT/Master-Typing-Lab-Application.git',
    }
]

// Hide AppBar on scroll down
function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Header = (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const location = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <HideOnScroll {...props}>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    backgroundColor: 'background.paper',
                    color: 'text.primary',
                    borderBottom: '1px solid',
                    borderColor: 'divider'
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ minHeight: '64px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                            <KeyboardIcon
                                style={{
                                    marginRight: '8px',
                                    color: theme.palette.primary.main
                                }}
                            />
                            <Typography
                                variant="h6"
                                component={RouterLink}
                                to="/"
                                sx={{
                                    flexGrow: 1,
                                    textDecoration: 'none',
                                    color: 'primary.main',
                                    fontWeight: 700,
                                    letterSpacing: '0.5px'
                                }}
                            >
                                {TEXT.BRANCH}
                            </Typography>
                        </Box>

                        {isMobile ? (
                            <>
                                <Box sx={{ flexGrow: 1 }} />
                                <IconButton
                                    color="inherit"
                                    aria-label="menu"
                                    edge="end"
                                    onClick={handleMenuOpen}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                >
                                    {navItems.map((item, index) => (
                                        <MenuItem
                                            key={index}
                                            component={RouterLink}
                                            to={item.path}
                                            onClick={handleMenuClose}
                                            selected={location.pathname === item.path}
                                        >
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </>
                        ) : (
                            <>
                                <Box sx={{ flexGrow: 1 }} />
                                <Box sx={{ display: 'flex' }}>
                                    {navItems.map((item, index) => (
                                        <Button
                                            key={index}
                                            component={RouterLink}
                                            to={item.path}
                                            sx={{
                                                mx: 1,
                                                textTransform: 'none',
                                                color: location.pathname === item.path
                                                    ? 'primary.main'
                                                    : 'text.primary',
                                                fontWeight: location.pathname === item.path
                                                    ? 600
                                                    : 400,
                                                position: 'relative',
                                                '&:hover': {
                                                    backgroundColor: 'transparent',
                                                    color: 'primary.main',
                                                    '&::after': {
                                                        width: '100%',
                                                    }
                                                },
                                                '&::after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    left: 0,
                                                    width: location.pathname === item.path ? '100%' : '0%',
                                                    height: '2px',
                                                    bgcolor: 'primary.main',
                                                    transition: 'width 0.3s ease'
                                                }
                                            }}
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </Box>
                            </>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    );
};

export default Header;