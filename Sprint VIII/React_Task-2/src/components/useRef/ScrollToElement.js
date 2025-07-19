import React, { useRef } from 'react';

const ScrollToElement = () => {
  const topRef = useRef(null);
  const middleRef = useRef(null);
  const bottomRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="task-container">
      <h2>Task 5: Scroll to Element</h2>
      
      <div className="scroll-controls">
        <button onClick={() => scrollToSection(topRef)} className="btn">
          Go to Top
        </button>
        <button onClick={() => scrollToSection(middleRef)} className="btn">
          Go to Middle
        </button>
        <button onClick={() => scrollToSection(bottomRef)} className="btn">
          Go to Bottom
        </button>
      </div>

      <div className="long-content">
        <div ref={topRef} className="section section-top">
          <h3>🔝 Top Section</h3>
          <p>This is the top of the page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          {Array.from({ length: 10 }, (_, i) => (
            <p key={i}>Content paragraph {i + 1} in the top section...</p>
          ))}
        </div>

        <div ref={middleRef} className="section section-middle">
          <h3>🎯 Middle Section</h3>
          <p>This is the middle section. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          {Array.from({ length: 10 }, (_, i) => (
            <p key={i}>Content paragraph {i + 1} in the middle section...</p>
          ))}
        </div>

        <div ref={bottomRef} className="section section-bottom">
          <h3>🔽 Bottom Section</h3>
          <p>This is the bottom section. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          {Array.from({ length: 10 }, (_, i) => (
            <p key={i}>Content paragraph {i + 1} in the bottom section...</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollToElement;