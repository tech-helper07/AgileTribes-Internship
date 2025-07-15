import React from 'react';
import { useUser } from '../contexts/UseContext.js'; // Adjust the import path as necessary

const UserProfile = () => {
  const { user, setUser } = useUser();

  const updateName = () => {
    setUser(prev => ({ ...prev, name: 'Jane Smith' }));
  };

  return (
    <div style={{ padding: '20px', border: '3px solid #ccc', margin: '10px', borderRadius: '10px', textAlign: 'center' }}>
      <h3>User Profile</h3>
      <p>{user.avatar} {user.name}</p>
      <p>Email: {user.email}</p>
      <button style={{backgroundColor: 'Blueviolet', color: 'white', borderRadius: '10px', padding: '10px 15px'}} onClick={updateName}>Change Name</button>
    </div>
  );
};

export default UserProfile;