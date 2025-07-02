import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

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
            {`Orders: ${entry.value.toLocaleString()}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};



const OrdersBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
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
        <Bar 
          dataKey="orders" 
          fill="url(#barGradient)"
          radius={[8, 8, 0, 0]}
        />
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#43e97b" />
            <stop offset="100%" stopColor="#38f9d7" />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
};



export default OrdersBarChart;
