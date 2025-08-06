import React from 'react';

const PaginatedUserList = ({ users, loading, onDelete }) => {
  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  if (users.length === 0) {
    return (
      <div className="empty-state">
        <p>No users found on this page.</p>
      </div>
    );
  }

  return (
    <div className="paginated-user-list">
      <div className="user-table">
        <div className="table-header">
          <div className="table-cell">ID</div>
          <div className="table-cell">Name</div>
          <div className="table-cell">Email</div>
          <div className="table-cell">Age</div>
          <div className="table-cell">City</div>
          <div className="table-cell">Actions</div>
        </div>
        
        {users.map(user => (
          <div key={user.id} className="table-row">
            <div className="table-cell">{user.id}</div>
            <div className="table-cell">{user.name}</div>
            <div className="table-cell">{user.email}</div>
            <div className="table-cell">{user.age}</div>
            <div className="table-cell">{user.city || 'N/A'}</div>
            <div className="table-cell">
              <button 
                onClick={() => onDelete(user.id)}
                className="btn btn-delete btn-small"
                title="Delete user"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaginatedUserList;