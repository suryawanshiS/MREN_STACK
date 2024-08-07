import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Navbar, Nav } from 'react-bootstrap';
import RouteGuard from './Components/RouteGuard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Lazy-loaded components
const ProductList = lazy(() => import('./Components/ProductList'));
const ProductDetails = lazy(() => import('./Components/ProductDetails'));
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={500}
            >
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route 
                        path="/product/:productId" 
                        element={
                            <RouteGuard>
                                <ProductDetails />
                            </RouteGuard>
                        } 
                    />
                    <Route path="/old-product/:productId" element={<Navigate to="/product/:productId" />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}

function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Music Store</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/products">Products</Nav.Link>
                </Nav>
            </Navbar>
            <Suspense fallback={<div>Loading...</div>}>
                <AnimatedRoutes />
            </Suspense>
        </Router>
    );
}

export default App;
