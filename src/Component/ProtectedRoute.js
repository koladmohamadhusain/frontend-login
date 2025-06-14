import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    // If no token, redirect to login page
    return <Navigate to="/login" replace />;
  }

  // Token exists, allow access to child components
  return children;
}

export default ProtectedRoute;
