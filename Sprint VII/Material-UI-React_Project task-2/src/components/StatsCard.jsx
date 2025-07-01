import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Icon
} from '@mui/material';

const StatsCard = ({ title, value, change, color, icon }) => {
  const isPositive = change.startsWith('+');
  
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography color="textSecondary" gutterBottom variant="h6">
              {title}
            </Typography>
            <Typography variant="h4" component="h2" sx={{ color: color, fontWeight: 'bold' }}>
              {value}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: isPositive ? 'success.main' : 'error.main',
                fontWeight: 'medium',
                mt: 1
              }}
            >
              {change} from last month
            </Typography>
          </Box>
          <Box 
            sx={{ 
              bgcolor: color,
              color: 'white',
              borderRadius: '50%',
              width: 48,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Icon>{icon}</Icon>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatsCard;