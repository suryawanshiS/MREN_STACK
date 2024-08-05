// src/auth.js
const isAuthenticated = () => {
    // Replace this with real authentication logic
    return localStorage.getItem('auth') === 'true';
  };
  
  const login = () => {
    localStorage.setItem('auth', 'true');
  };
  
  const logout = () => {
    localStorage.removeItem('auth');
  };
  
  export { isAuthenticated, login, logout };
  