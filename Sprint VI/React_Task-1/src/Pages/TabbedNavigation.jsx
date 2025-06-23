import React, { useState } from 'react';
const TabbedNavigation = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { name: 'Home', content: 'Welcome to the Home tab! This is where you can find general information.' },
    { name: 'About', content: 'About us: We are a team of developers passionate about React and modern web development.' },
    { name: 'Services', content: 'Our Services: We offer web development, consulting, and training services.' },
    { name: 'Contact', content: 'Contact us: Email us at contact@example.com or call (555) 123-4567.' },
    // { name: 'Contact', content: 'Contact us: Email us at contact@example.com or call (555) 123-4567.' }

  ];

  return (
    <div className="tabs-container">
      <h3 className="tabs-title"> Tabbed Navigation Container</h3>
      <div className="tabs-header">
        <div className="tabs-nav">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};


export default TabbedNavigation;