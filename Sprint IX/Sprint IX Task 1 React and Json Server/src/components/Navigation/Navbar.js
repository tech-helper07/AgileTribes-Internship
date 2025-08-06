import React from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'users', label: 'User Management', icon: '👥' },
    { id: 'products', label: 'Product Inventory', icon: '📦' },
    { id: 'blog', label: 'Blog Editor', icon: '📝' },
    { id: 'paginated', label: 'Paginated Users', icon: '📄' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h1>😍FULL STACK APP BY SANJAI N😎</h1>
      </div>
      <div className="nav-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;