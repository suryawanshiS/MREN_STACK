// src/Pages/LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../auth';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/protected');
  };

  return (
    <div className="container mt-4">
      <div className="text-center">
        <h2>Login</h2>
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
