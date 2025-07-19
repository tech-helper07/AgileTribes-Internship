import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams();

  return (
    <div className="task-container">
      <h2>Task 1: Display ID from URL</h2>
      <div className="task-content">
        <h3>User Profile</h3>
        <p>User ID from URL: <strong>{id}</strong></p>
        <div className="user-card">
          <h4>User #{id}</h4>
          <p>This is the profile page for user {id}</p>
          <p>The ID was extracted from the URL parameter using useParams()</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;