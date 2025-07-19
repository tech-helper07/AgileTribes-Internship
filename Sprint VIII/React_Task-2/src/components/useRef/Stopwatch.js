import React, { useRef, useState } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const stopStopwatch = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  };

  const resetStopwatch = () => {
    stopStopwatch();
    setTime(0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="task-container">
      <h2>Task 3: Stopwatch using setInterval</h2>
      <div className="task-content">
        <div className="stopwatch-display">
          <h1>{formatTime(time)}</h1>
        </div>
        <div className="stopwatch-controls">
          <button onClick={startStopwatch} disabled={isRunning} className="btn">
            Start
          </button>
          <button onClick={stopStopwatch} disabled={!isRunning} className="btn">
            Stop
          </button>
          <button onClick={resetStopwatch} className="btn btn-secondary">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;