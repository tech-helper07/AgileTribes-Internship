import React, { useRef, useState, useEffect } from 'react';

const PreviousValue = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });

  const prevCount = prevCountRef.current;

  return (
    <div className="task-container">
      <h2>Task 4: Track Previous Value</h2>
      <div className="task-content">
        <p>Current count: <strong>{count}</strong></p>
        <p>Previous count: <strong>{prevCount}</strong></p>
        <div className="controls">
          <button onClick={() => setCount(count + 1)} className="btn">
            Increment
          </button>
          <button onClick={() => setCount(count - 1)} className="btn">
            Decrement
          </button>
          <button onClick={() => setCount(0)} className="btn btn-secondary">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviousValue;