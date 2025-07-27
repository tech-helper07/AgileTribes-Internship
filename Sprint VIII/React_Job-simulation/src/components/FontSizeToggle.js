import React from 'react';
import { useFontContext } from '../context/FontContext';


const FontSizeToggle = () => {
  const { fontSize, setFontSize } = useFontContext();

  const fontSizes = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' }
  ];

  return (
    <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
      <h3>Font Size Settings:</h3>
      {fontSizes.map((size) => (
        <button
          key={size.value}
          onClick={() => setFontSize(size.value)}
          style={{
            margin: '0 5px',
            padding: '5px 10px',
            backgroundColor: fontSize === size.value ? '#007bff' : '#fff',
            color: fontSize === size.value ? '#fff' : '#000',
            border: '1px solid #007bff',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {size.label}
        </button>
      ))}
      <span style={{ marginLeft: '15px' }}>
        Current: <strong>{fontSize}</strong>
      </span>
    </div>
  );
};

export default FontSizeToggle;