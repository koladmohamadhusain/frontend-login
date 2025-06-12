import React from 'react';

function Navbar({ user, onLoginClick, onSignupClick, onLogout }) {
  return (
    <nav className="navbar">
      <h2>My App</h2>
      <div>
        {!user ? (
          <>
            <button onClick={onLoginClick}>Sign In</button>
            <button onClick={onSignupClick}>Sign Up</button>
          </>
        ) : (
          <button onClick={onLogout}>Sign Out</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
