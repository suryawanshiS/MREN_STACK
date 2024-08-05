import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import FetchExample from './Components/FetchExample';
import LocalStorageExample from './Components/LocalStorageExample';
import WindowSizeExample from './Components/WindowSizeExample';
import PreviousExample from './Components/PreviousExample';
import DebounceExample from './Components/DebounceExample';

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">React Hooks Examples</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/fetch">useFetch</Nav.Link>
              <Nav.Link as={Link} to="/local-storage">useLocalStorage</Nav.Link>
              <Nav.Link as={Link} to="/window-size">useWindowSize</Nav.Link>
              <Nav.Link as={Link} to="/previous">usePrevious</Nav.Link>
              <Nav.Link as={Link} to="/debounce">useDebounce</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route path="/fetch" element={<FetchExample />} />
          <Route path="/local-storage" element={<LocalStorageExample />} />
          <Route path="/window-size" element={<WindowSizeExample />} />
          <Route path="/previous" element={<PreviousExample />} />
          <Route path="/debounce" element={<DebounceExample />} />
          <Route path="/" element={
            <>
              <h2 className="text-center">Welcome to React Hooks Examples</h2>
              <p className="text-center">Select a hook from the menu to see an example.</p>
            </>
          } />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
