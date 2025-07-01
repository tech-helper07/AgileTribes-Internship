import React, { useState } from 'react';
import {
  Box,
  Toolbar,
  Grid,
  Container,
  Typography
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from './TopBar';
import Sidebar from './Sidebar';
import StatsCard from './StatsCard';
import ChartCard from './ChartCard';
import { statsData, chartData } from '../data/mockData';



const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <TopBar onMenuClick={handleMenuClick} open={sidebarOpen} />
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: 'background.default',
            p: 3,
            marginLeft: sidebarOpen ? '240px' : 0,
            transition: 'margin 0.3s ease'
          }}
        >
          <Toolbar />
          
          <Container maxWidth="lg">
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
              Dashboard Overview
            </Typography>
            
            {/* Stats Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              {statsData.map((stat, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <StatsCard {...stat} />
                </Grid>
              ))}
            </Grid>
            
            {/* Charts */}
            <Grid container spacing={7}>
              <Grid item ls={12} sx={{width: '100%'}}>
                <ChartCard title="Sales & Users Trend" data={chartData} />
              </Grid>
              <Grid item ls={12} md={4} sx={{width: '100%', height: '100%' }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Recent Activity
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        • New user registration
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        • Order #1234 completed
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        • Payment received
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        • System backup completed
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;