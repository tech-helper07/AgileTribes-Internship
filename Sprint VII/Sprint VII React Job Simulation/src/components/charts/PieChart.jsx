import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0];
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
          {data.name}
        </p>
        <p style={{ margin: '4px 0', color: data.payload.color, fontSize: '14px' }}>
          {`${data.value}%`}
        </p>
      </div>
    );
  }
  return null;
};

const CategoryPieChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={120}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend 
          verticalAlign="bottom" 
          height={36}
          iconType="circle"
          wrapperStyle={{
            fontSize: '12px',
            color: '#64748b'
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CategoryPieChart;