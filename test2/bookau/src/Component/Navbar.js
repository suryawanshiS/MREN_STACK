import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <BootstrapNavbar.Brand as={Link} to="/">Book Review App</BootstrapNavbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/add-review">Add Review</Nav.Link>
        <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
      </Nav>
    </BootstrapNavbar>
  );
};

export default NavigationBar;