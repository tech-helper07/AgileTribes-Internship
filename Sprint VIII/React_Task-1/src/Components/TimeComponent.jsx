import React, { useState, useEffect } from 'react';

function TimerComponent() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Start the timer
    const intervalId = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    
    // Cleanup function - runs when component unmounts
    return () => {
      clearInterval(intervalId);
      console.log("Timer cleaned up");
    };
  }, []); // Empty dependency array means this runs once on mount
  
  return (
    <div className="app-container">
      <h3 className="font-bold text-lg mb-2">Task 2: Timer with Cleanup</h3>
      <p className="text-2xl font-mono">Timer: {count} seconds</p>
      {/* <p className="text-sm text-gray-600 mt-2">
        <strong>Explanation:</strong> setInterval creates a timer, and we return a cleanup function to prevent memory leaks.
      </p> */}
    </div>
  );
}


export default TimerComponent;