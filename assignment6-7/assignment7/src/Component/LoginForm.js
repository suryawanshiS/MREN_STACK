import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful login
    console.log('Email:', email);
    console.log('Password:', password);
    setLoginSuccess(true);
  };

  return (
    <div className="card p-4">
      <h3 className="mb-4">Login Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email:</label>
          <input 
            type="email" 
            className="form-control" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input 
            type="password" 
            className="form-control" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>

      {loginSuccess && (
        <div className="alert alert-success mt-3">
          Login successful!
        </div>
      )}
    </div>
  );
}

export default LoginForm;
