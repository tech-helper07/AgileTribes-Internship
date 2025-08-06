import React from 'react';

const UserList = ({ users, loading, onEdit, onDelete }) => {
  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  if (users.length === 0) {
    return (
      <div className="empty-state">
        <p>No users found. Add your first user!</p>
      </div>
    );
  }

  return (
    <div className="user-list-container">
      <h3>📋 Users List ({users.length})</h3>
      
      <div className="user-list">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <div className="user-info">
              <h4>{user.name}</h4>
              <p>📧 {user.email}</p>
              <p>🎂 {user.age} years old</p>
              {user.city && <p>🏙️ {user.city}</p>}
            </div>
            
            <div className="user-actions">
              <button 
                onClick={() => onEdit(user)}
                className="btn btn-edit"
                title="Edit user"
              >
                ✏️
              </button>
              <button 
                onClick={() => onDelete(user.id)}
                className="btn btn-delete"
                title="Delete user"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;