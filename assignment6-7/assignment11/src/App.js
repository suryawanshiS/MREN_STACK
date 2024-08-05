// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Post1 from './Pages/Post1';
import Post2 from './Pages/Post2';
import NotFound from './Pages/404Page';
import LoginPage from './Pages/LoginPage';
import ProtectedPage from './Pages/ProtectedPage';
import ProtectedRoute from './Components/ProtectedRoute'; // Import ProtectedRoute component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/post1" element={<Post1 />} />
        <Route path="/blog/post2" element={<Post2 />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/protected" element={<ProtectedRoute element={<ProtectedPage />} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
