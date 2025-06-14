import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear JWT token
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#007bff', color: 'white' }}>
      <h2 style={{ display: 'inline', marginRight: '1rem' }}>My App</h2>
      <button
        onClick={handleLogout}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#ff4d4d',
          border: 'none',
          borderRadius: '4px',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;

