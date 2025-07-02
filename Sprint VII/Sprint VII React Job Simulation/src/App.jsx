import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box, Toolbar } from '@mui/material';
import { theme } from './Theme';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './components/layout/Dashboard';
// import './App.css';

const drawerWidth = 280;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Header onMenuClick={handleDrawerToggle} />
        <Sidebar mobileOpen={mobileOpen} onMobileClose={handleDrawerToggle} />
        
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            minHeight: '100vh',
          }}
        >
          <Toolbar />
          <Dashboard />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;