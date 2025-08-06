import React, { useState, useEffect } from 'react';
import { usersAPI } from '../../services/api';
import UserForm from './UserForm';
import UserList from './UserList';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await usersAPI.getAll();
      setUsers(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch users');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = async (userData) => {
    try {
      const response = await usersAPI.create(userData);
      setUsers([...users, response.data]);
      return { success: true };
    } catch (err) {
      console.error('Error adding user:', err);
      return { success: false, error: 'Failed to add user' };
    }
  };

  const handleUpdateUser = async (id, userData) => {
    try {
      const response = await usersAPI.update(id, userData);
      setUsers(users.map(user => user.id === id ? response.data : user));
      setEditingUser(null);
      return { success: true };
    } catch (err) {
      console.error('Error updating user:', err);
      return { success: false, error: 'Failed to update user' };
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await usersAPI.delete(id);
        setUsers(users.filter(user => user.id !== id));
      } catch (err) {
        console.error('Error deleting user:', err);
        setError('Failed to delete user');
      }
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  return (
    <div className="user-management">
      <h2>👥 User Management</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="management-layout">
        <div className="form-section">
          <UserForm
            user={editingUser}
            onSubmit={editingUser ? handleUpdateUser : handleAddUser}
            onCancel={handleCancelEdit}
            isEditing={!!editingUser}
          />
        </div>
        
        <div className="list-section">
          <UserList
            users={users}
            loading={loading}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />
        </div>
      </div>
    </div>
  );
};

export default UserManagement;