import React, { useRef, useState } from 'react';

const ButtonClickCounter = () => {
  const clickCountRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const handleClick = () => {
    clickCountRef.current += 1;
    console.log(`Button clicked ${clickCountRef.current} times`);
    alert(`Button clicked ${clickCountRef.current} times (no re-render!)`);
  };

  const forceRender = () => {
    setRenderCount(prev => prev + 1);
  };

  return (
    <div className="task-container">
      <h2>Task 2: Track Clicks Without Re-render</h2>
      <div className="task-content">
        <p>Render count: {renderCount}</p>
        <p>Check console and alerts for click count</p>
        <button onClick={handleClick} className="btn">
          Click Me (No Re-render)
        </button>
        <button onClick={forceRender} className="btn btn-secondary">
          Force Re-render to Reset Demo
        </button>
      </div>
    </div>
  );
};

export default ButtonClickCounter;