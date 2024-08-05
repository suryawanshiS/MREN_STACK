// src/Pages/ProtectedPage.js
import React from 'react';

const ProtectedPage = () => {
  return (
    <div className="container mt-4">
      <div className="text-center">
        <h2>Protected Page</h2>
        <p>This page is only accessible to logged-in users.</p>
      </div>
    </div>
  );
};

export default ProtectedPage;
