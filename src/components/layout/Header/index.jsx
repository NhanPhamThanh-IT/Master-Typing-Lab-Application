import {
    AppBar,
    Toolbar,
    Typography,
    Button,
} from '@mui/material';
import {
    Keyboard as KeyboardIcon
} from 'lucide-react';
import {
    Link as RouterLink
} from 'react-router-dom';

// Constants
import routePaths from '@constants/routePaths';
import TEXT from '@constants/textConstants';

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
        label: 'Contact Us',
        path: routePaths.contact,
    }
]

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <KeyboardIcon style={{ marginRight: '8px' }} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {TEXT.BRANCH}
                </Typography>
                {navItems.map((item) => (
                    <Button
                        color="inherit"
                        component={RouterLink}
                        to={item.path}
                        sx={{ textTransform: "none" }}
                    >
                        {item.label}
                    </Button>
                ))}
            </Toolbar>
        </AppBar >
    )
};

export default Header;