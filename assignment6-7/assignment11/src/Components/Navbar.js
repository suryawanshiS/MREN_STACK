// src/Components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">My App</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                end
                style={({ isActive }) => ({
                  fontWeight: isActive ? 'bold' : 'normal',
                  color: isActive ? 'red' : 'black'
                })}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                style={({ isActive }) => ({
                  fontWeight: isActive ? 'bold' : 'normal',
                  color: isActive ? 'red' : 'black'
                })}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                style={({ isActive }) => ({
                  fontWeight: isActive ? 'bold' : 'normal',
                  color: isActive ? 'red' : 'black'
                })}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/blog"
                style={({ isActive }) => ({
                  fontWeight: isActive ? 'bold' : 'normal',
                  color: isActive ? 'red' : 'black'
                })}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
