// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoApp from './Component/TodoApp';
import Gallery from './Component/Gallery';
import ContactList from './Component/ContactList';
import ShoppingCart from './Component/ShoppingCart';
import Navbar from './Component/Navbar';

function App() {
  const imageUrls = [
    'https://m.media-amazon.com/images/I/71OdUUK3ROL._SX679_.jpg',
    'https://m.media-amazon.com/images/I/719kvuIMdKL._SX679_.jpg',
    'https://m.media-amazon.com/images/I/71xnogRjlyL._SX679_.jpg',
    'https://m.media-amazon.com/images/I/71JQ3kUrR9L._SX679_.jpg',
    'https://m.media-amazon.com/images/I/812v525aLdL._SX679_.jpg',
    'https://m.media-amazon.com/images/I/71WZwdG8ENL._SX679_.jpg'
  ];

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Contact', link: '/contact' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Shopping Cart', link: '/shopping-cart' }
  ];

  return (
    <Router>
      <Navbar items={menuItems} />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="/gallery" element={<Gallery images={imageUrls} />} />
          <Route path="/contact" element={<ContactList contacts={[{ name: 'suraj', phone: '123456789', email: 'suraj@example.com' }]} />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


