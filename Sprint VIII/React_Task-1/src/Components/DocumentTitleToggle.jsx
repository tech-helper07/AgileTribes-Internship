import React, { useState, useEffect } from 'react';

function DocumentTitleToggle() {
  const [clickCount, setClickCount] = useState(0);
  
  useEffect(() => {
    document.title = `Clicked ${clickCount} times`;
  }, [clickCount]); // Dependency array includes clickCount - runs when it changes
  
  return (
    <div className="app-container">
      <h3 className="font-bold text-lg mb-2">Task 5: Document Title Toggle</h3>
      <p>Click count: {clickCount}</p>
      <button 
        onClick={() => setClickCount(prev => prev + 1)}
        className="btn btn-primary"
      >
        Click me!
      </button>
      {/* <p className="text-sm text-gray-600 mt-2">
        <strong>Explanation:</strong> useEffect with [clickCount] dependency updates the document title whenever count changes.
      </p> */}
    </div>
  );
}


export default DocumentTitleToggle;