import React, { useState } from 'react';
const Dropbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Select an option');
  
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <h3 className="dropdown-title"> Dropdown Container</h3>
      <div className="dropdown-wrapper">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="dropdown-trigger"
        >
          <span>{selected}</span>
          <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
            ▼
          </span>
        </button>
        
        {isOpen && (
          <div className="dropdown-menu">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option)}
                className="dropdown-option"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropbox;