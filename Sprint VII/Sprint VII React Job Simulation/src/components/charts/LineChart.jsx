import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { useTheme } from '@mui/material/styles';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div 
        style={{
          backgroundColor: 'white',
          padding: '12px',
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <p style={{ margin: 0, fontWeight: 600, color: '#1e293b' }}>
          {`${label}`}
        </p>
        {payload.map((entry, index) => (
          <p 
            key={index} 
            style={{ 
              margin: '4px 0', 
              color: entry.color,
              fontSize: '14px' 
            }}
          >
            {`${entry.name}: ${entry.value.toLocaleString()}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const RevenueLineChart = ({ data }) => {
  const theme = useTheme();
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis 
          dataKey="month" 
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#64748b' }}
        />
        <YAxis 
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#64748b' }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="url(#revenueGradient)"
          strokeWidth={3}
          dot={{ fill: '#667eea', strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, stroke: '#667eea', strokeWidth: 2 }}
          name="Revenue"
        />
        <Line
          type="monotone"
          dataKey="users"
          stroke="url(#usersGradient)"
          strokeWidth={3}
          dot={{ fill: '#f093fb', strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, stroke: '#f093fb', strokeWidth: 2 }}
          name="Users"
        />
        <defs>
          <linearGradient id="revenueGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
          <linearGradient id="usersGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f093fb" />
            <stop offset="100%" stopColor="#f5576c" />
          </linearGradient>
        </defs>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueLineChart;