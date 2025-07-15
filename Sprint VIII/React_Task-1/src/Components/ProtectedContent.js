import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const ProtectedContent = () => {
  const { isAuthenticated, user, logout } = useAuth();

  if (!isAuthenticated) {
    return (
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9', margin: '10px' }}>
        <p>Please log in to see protected content.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', backgroundColor: '#e8f5e8', margin: '10px' }}>
      <h3>🎉 Welcome, {user.username}!</h3>
      <p>You are now authenticated and can see this protected content.</p>
      <p>Login time: {user.loginTime}</p>
      <button onClick={logout} style={{ padding: '5px 15px' }}>
        Logout
      </button>
    </div>
  );
};

export default ProtectedContent;