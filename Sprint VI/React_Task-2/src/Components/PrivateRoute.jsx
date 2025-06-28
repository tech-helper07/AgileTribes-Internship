import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = false; // Set true to simulate login

const PrivateRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
