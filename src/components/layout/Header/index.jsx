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

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <KeyboardIcon style={{ marginRight: '8px' }} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    TypeMaster
                </Typography>
                <Button color="inherit" component={RouterLink} to="/">
                    Home
                </Button>
                <Button color="inherit" component={RouterLink} to="/main">
                    Practice
                </Button>
            </Toolbar>
        </AppBar>
    )
};

export default Header;