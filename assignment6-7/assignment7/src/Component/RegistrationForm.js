import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful registration
    const userData = {
      username,
      email,
      password,
    };
    console.log('User Data:', userData);
    setRegistrationSuccess(true);
  };

  return (
    <div className="card p-4">
      <h3 className="mb-4">Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Username:</label>
          <input 
            type="text" 
            className="form-control" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
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
        <button type="submit" className="btn btn-success">Register</button>
      </form>

      {registrationSuccess && (
        <div className="alert alert-success mt-3">
          Registration successful!
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
