import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemedComponent = () => {
  const { theme, themeStyles } = useTheme();

  return (
    <div style={{
      ...themeStyles[theme],
      padding: '20px',
      margin: '10px',
      borderRadius: '8px',
      border: `2px solid ${theme === 'light' ? '#333' : '#fff'}`
    }}>
      <h3>Themed Component</h3>
      <p>Current theme: {theme}</p>
      <p>This component automatically adapts to the theme!</p>
    </div>
  );
};

export default ThemedComponent;