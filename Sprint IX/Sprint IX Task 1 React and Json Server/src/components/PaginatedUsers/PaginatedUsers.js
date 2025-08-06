import React, { useState, useEffect } from 'react';
import { usersAPI } from '../../services/api';
import PaginatedUserList from './PaginatedUserList';
import Pagination from './Pagination';

const PaginatedUsers = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const usersPerPage = 3;

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await usersAPI.getPaginated(currentPage, usersPerPage);
      setUsers(response.data);
      
      // JSON Server returns total count in X-Total-Count header
      const total = parseInt(response.headers['x-total-count'] || '0');
      setTotalUsers(total);
      
      setError('');
    } catch (err) {
      setError('Failed to fetch users');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await usersAPI.delete(id);
        
        // Refresh the current page
        await fetchUsers();
        
        // If current page is empty and not the first page, go to previous page
        if (users.length === 1 && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      } catch (err) {
        console.error('Error deleting user:', err);
        setError('Failed to delete user');
      }
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(totalUsers / usersPerPage);

  return (
    <div className="paginated-users">
      <h2>📄 Paginated Users with Delete</h2>
      
      <div className="pagination-info">
        <p>
          Showing {users.length} of {totalUsers} users 
          (Page {currentPage} of {totalPages})
        </p>
      </div>
      
      {error && <div className="error-message">{error}</div>}
      
      <PaginatedUserList
        users={users}
        loading={loading}
        onDelete={handleDeleteUser}
      />
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginatedUsers;