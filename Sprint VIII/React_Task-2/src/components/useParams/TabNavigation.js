import React from 'react';
import { useParams, Link } from 'react-router-dom';

const TabNavigation = () => {
  const { tabName } = useParams();

  const tabs = ['home', 'about', 'services', 'contact'];

  const getTabContent = (tab) => {
    switch (tab) {
      case 'home':
        return 'Welcome to the Home page! This is your starting point.';
      case 'about':
        return 'About us: We are a company dedicated to teaching React concepts.';
      case 'services':
        return 'Our services include React training, consulting, and development.';
      case 'contact':
        return 'Contact us at: react-learning@example.com or call (555) 123-4567.';
      default:
        return 'Select a tab to view its content.';
    }
  };

  return (
    <div className="task-container">
      <h2>Task 4: Highlight Active Tab</h2>
      <div className="task-content">
        <div className="tab-navigation">
          {tabs.map((tab) => (
            <Link
              key={tab}
              to={`/tab/${tab}`}
              className={`tab ${tabName === tab ? 'active' : ''}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Link>
          ))}
        </div>
        
        <div className="tab-content">
          <h3>Current Tab: {tabName}</h3>
          <p>{getTabContent(tabName)}</p>
          <p><small>Active tab is highlighted based on URL parameter</small></p>
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;