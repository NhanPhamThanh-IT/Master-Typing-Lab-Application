/**
 * @fileoverview Sidebar component for the Typing Test Application.
 * Provides navigation and additional features in a permanently expanded sidebar.
 * 
 * @module components/layout/Sidebar
 * @requires react
 * @requires @mui/material
 * @requires @mui/icons-material
 */

import {
  Link as RouterLink
} from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';

import CONSTANTS from './constants';

/**
 * Sidebar component that provides navigation options.
 * Always expanded regardless of screen size.
 * 
 * @component
 * @returns {JSX.Element} Sidebar component
 */
const Sidebar = () => {
  const theme = useTheme();
  const drawerWidth = 240;

  return (
    <Box
      component="nav"
      sx={{ width: drawerWidth, flexShrink: 0 }}
    >
      {/* Permanent drawer for all screen sizes */}
      <Drawer
        variant="permanent"
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            borderRight: `1px solid ${theme.palette.divider}`,
            backgroundColor: theme.palette.background.default,
          },
        }}
        open
      >
        <SidebarContent />
      </Drawer>
    </Box>
  );
};

/**
 * Internal component for sidebar content
 */
const SidebarContent = () => {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 8 }}>
      <List sx={{ pt: 1 }}>
        {CONSTANTS.NAV_ITEMS.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              sx={{
                py: 1.5,
                '&.Mui-selected': {
                  backgroundColor: `${theme.palette.primary.main}15`,
                },
                '&:hover': {
                  backgroundColor: `${theme.palette.primary.main}10`,
                },
              }}
            >
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;