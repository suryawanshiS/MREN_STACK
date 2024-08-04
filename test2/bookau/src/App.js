import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './components/HomePage';
import BookDetails from './components/BookDetails';
import AddReview from './components/AddReview';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/add-review" element={<AddReview />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;