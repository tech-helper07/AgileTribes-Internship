import React from 'react';
import { useUser } from '../contexts/UseContext.js'; // Adjust the import path as necessary


const UserGreeting = () => {
  const { user } = useUser();

  return (
    <div style={{ padding: '10px', backgroundColor: '#f0f0f0', margin: '10px' }}>
      <h4>Welcome, {user.name}! 👋</h4>
    </div>
  );
};

export default UserGreeting;