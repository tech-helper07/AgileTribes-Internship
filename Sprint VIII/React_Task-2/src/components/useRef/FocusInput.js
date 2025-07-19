import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="task-container">
      <h2>Task 1: Focus Input Field</h2>
      <div className="task-content">
        <input 
          ref={inputRef}
          type="text" 
          placeholder="Click the button to focus me!"
          className="input-field"
        />
        <button onClick={handleFocus} className="btn">
          Focus Input
        </button>
      </div>
    </div>
  );
};

export default FocusInput;