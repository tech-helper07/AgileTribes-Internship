import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip,
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  People,
  ShoppingCart,
  AttachMoney,
  Assessment,
} from '@mui/icons-material';
import RevenueLineChart from '../charts/LineChart';
import CategoryPieChart from '../charts/PieChart';
import OrdersBarChart from '../charts/BarChart';
import { statsData, revenueData, categoryData, recentActivities } from '../../data/mockData';
import { styled } from '@mui/material/styles';

const GradientCard = styled(Card)(({ gradient, theme }) => ({
  background: gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100px',
    height: '100px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    transform: 'translate(30px, -30px)',
  },
}));

const StatCard = ({ stat }) => {
  const iconMap = {
    revenue: <AttachMoney sx={{ fontSize: 28 }} />,
    users: <People sx={{ fontSize: 28 }} />,
    conversion: <Assessment sx={{ fontSize: 28 }} />,
    orders: <ShoppingCart sx={{ fontSize: 28 }} />,
  };

  return (
    <GradientCard gradient={stat.color}>
      <CardContent sx={{ position: 'relative', zIndex: 1 }}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              {stat.title}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              {stat.value}
            </Typography>
            <Box display="flex" alignItems="center">
              {stat.trend === 'up' ? <TrendingUp sx={{ mr: 0.5, fontSize: 18 }} /> : <TrendingDown sx={{ mr: 0.5, fontSize: 18 }} />}
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {stat.change}
              </Typography>
            </Box>
          </Box>
          <Avatar sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', width: 56, height: 56 }} src="https://i.pravatar.cc/300">
            {iconMap[stat.icon]}
          </Avatar>
        </Box>
      </CardContent>
    </GradientCard>
  );
};

const ChartCard = ({ title, children, height = 300 }) => (
  <Card sx={{ height: '100%', p: 3 }}>
    <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
      {title}
    </Typography>
    <Box sx={{ height }}>
      {children}
    </Box>
  </Card>
);

const Dashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Welcome Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Welcome back! 👋
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here's what's happening with your business today.
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statsData.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatCard stat={stat} />
          </Grid>
        ))}
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Revenue Trend */}
        <Grid item xs={12} lg={8} sx={{ width: '100%' }}>
          <ChartCard title="Revenue Trend" height={350}>
            <RevenueLineChart data={revenueData} />
          </ChartCard>
        </Grid>

        {/* Category Analytics */}
        <Grid item xs={12} lg={4} sx={{ width: '100%' }}>
          <ChartCard title="Category Analytics" height={350}>
            <CategoryPieChart data={categoryData} />
          </ChartCard>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Grid container spacing={3}>
        {/* Monthly Orders */}
        <Grid item xs={12} lg={8} sx={{ width: '100%' }}>
          <ChartCard title="Monthly Orders" height={300}>
            <OrdersBarChart data={revenueData} />
          </ChartCard>
        </Grid>

        {/* Recent Activities */}
        <Grid item xs={12} lg={4} sx={{ width: '100%' }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Recent Activities
              </Typography>
              <List sx={{ p: 0 }}>
                {recentActivities.map((activity) => (
                  <ListItem key={activity.id} sx={{ px: 0, py: 1 }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: 'primary.light', width: 40, height: 40 }} src="https://i.pravatar.cc/300">
                        {activity.user.split(' ').map(n => n[0]).join('')}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {activity.user}
                          </Typography>
                          {activity.amount && (
                            <Chip 
                              label={activity.amount} 
                              size="small" 
                              sx={{ 
                                bgcolor: 'success.light', 
                                color: 'success.dark',
                                fontWeight: 600,
                              }} 
                            />
                          )}
                        </Box>
                      }
                      secondary={
                        <Box>
                          <Typography variant="body2" color="text.secondary">
                            {activity.action}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {activity.time}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
export { GradientCard, StatCard, ChartCard, Dashboard };