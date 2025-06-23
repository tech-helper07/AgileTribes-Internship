import React, { useState } from 'react';

const Toggle = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`theme-container ${isDark ? 'dark' : 'light'}`}>
      <h3 className="theme-title">Theme Toggle Container</h3>
      <p className="theme-status">Current theme: {isDark ? 'Dark' : 'Light'}</p>
      <button 
        onClick={() => setIsDark(!isDark)}
        className={`theme-toggle-btn ${isDark ? 'to-light' : 'to-dark'}`}
      >
        Switch to {isDark ? 'Light' : 'Dark'} Theme
      </button>
    </div>
  );
};

export default Toggle;