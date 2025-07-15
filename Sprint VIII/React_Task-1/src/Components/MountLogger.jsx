import React, { useEffect } from 'react';

function MountLogger() {
  useEffect(() => {
    console.log("Component Loaded");
    // Empty dependency array means this runs only once when component mounts
  }, []);
  
  return (
    <div className="app-container">
      <h3 className="font-bold text-lg mb-2">Task 1: Mount Logger</h3>
      <p>Check console - you should see "Component Loaded" message</p>
      {/* <p className="text-sm text-gray-600 mt-2">
        <strong>Explanation:</strong> useEffect with empty dependency array [] runs only once when component mounts.
      </p> */}
    </div>
  );
}

export default MountLogger;