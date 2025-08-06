import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navigation/Navbar';
import UserManagement from './components/UserManagement/UserManagement';
import ProductInventory from './components/ProductInventory/ProductInventory';
import BlogEditor from './components/BlogEditor/BlogEditor';
import PaginatedUsers from './components/PaginatedUsers/PaginatedUsers';

function App() {
  const [activeTab, setActiveTab] = useState('users');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'users':
        return <UserManagement />;
      case 'products':
        return <ProductInventory />;
      case 'blog':
        return <BlogEditor />;
      case 'paginated':
        return <PaginatedUsers />;
      default:
        return <UserManagement />;
    }
  };

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        {renderActiveComponent()}
      </main>
    </div>
  );
}

export default App;
