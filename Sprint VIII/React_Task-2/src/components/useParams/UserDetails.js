import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        // Using JSONPlaceholder API for demo
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div className="task-container"><p>Loading user details...</p></div>;
  if (error) return <div className="task-container"><p>Error: {error}</p></div>;

  return (
    <div className="task-container">
      <h2>Task 3: Fetch Data Based on URL Param</h2>
      <div className="task-content">
        <h3>User Details (Fetched from API)</h3>
        <p>User ID from URL: <strong>{userId}</strong></p>
        {user && (
          <div className="user-details-card">
            <h4>{user.name}</h4>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;