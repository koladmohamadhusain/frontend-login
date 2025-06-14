import React from 'react';

function ProtectedPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Protected Page</h1>
      <p>This page can only be seen by logged-in users.</p>
    </div>
  );
}

export default Protected;
