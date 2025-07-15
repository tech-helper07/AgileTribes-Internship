import React, { useState, useEffect } from 'react';

function WindowResizeListener() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup - remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="app-container">
      <h3 className="font-bold text-lg mb-2">Task 4: Window Resize Listener</h3>
      <p className="text-xl">Current window width: <span className="font-mono">{windowWidth}px</span></p>
      {/* <p className="text-sm text-gray-600 mt-2">
        <strong>Explanation:</strong> We listen to window resize events and clean up the listener to prevent memory leaks.
      </p> */}
    </div>
  );
}

export default WindowResizeListener;