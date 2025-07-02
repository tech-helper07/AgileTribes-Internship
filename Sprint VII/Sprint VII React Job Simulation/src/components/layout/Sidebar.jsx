import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  Divider,
  Typography,
} from '@mui/material';
import {
  Dashboard,
  Analytics,
  People,
  ShoppingCart,
  AttachMoney,
  Settings,
  ExitToApp,
  TrendingUp,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const drawerWidth = 280;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
    borderRight: '1px solid rgba(0, 0, 0, 0.08)',
  },
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: '12px',
  margin: '4px 12px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    transform: 'translateX(4px)',
    '& .MuiListItemIcon-root': {
      color: 'white',
    },
  },
  '&.Mui-selected': {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    '& .MuiListItemIcon-root': {
      color: 'white',
    },
    '&:hover': {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
  },
}));

const menuItems = [
  { text: 'Dashboard', icon: <Dashboard />, active: true },
  { text: 'Analytics', icon: <Analytics /> },
  { text: 'Users', icon: <People /> },
  { text: 'Orders', icon: <ShoppingCart /> },
  { text: 'Revenue', icon: <AttachMoney /> },
  { text: 'Reports', icon: <TrendingUp /> },
];

const Sidebar = ({ mobileOpen, onMobileClose }) => {
  const drawer = (
    <Box>
      <Toolbar sx={{ justifyContent: 'center', py: 3 }}>
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 700,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Dashboard
        </Typography>
      </Toolbar>
      
      <Divider sx={{ mx: 2, mb: 2 }} />
      
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <StyledListItemButton selected={item.active || false}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                }}
              />
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Box sx={{ position: 'absolute', bottom: 20, left: 0, right: 0 }}>
        <Divider sx={{ mx: 2, mb: 2 }} />
        <List>
          <ListItem disablePadding>
            <StyledListItemButton>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </StyledListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <StyledListItemButton>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </StyledListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <StyledDrawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
        }}
      >
        {drawer}
      </StyledDrawer>
      
      <StyledDrawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
        }}
        open
      >
        {drawer}
      </StyledDrawer>
    </Box>
  );
};

export default Sidebar;