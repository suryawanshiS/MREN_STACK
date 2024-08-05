import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DataFetchingComponent from './Component/DataFetchingComponent';
import EventListenerComponent from './Component/EventListenerComponent';
import LocalStorageSyncComponent from './Component/LocalStorageSyncComponent';
import DynamicTitleComponent from './Component/DynamicTitleComponent';
import TimerWithCleanupComponent from './Component/TimerwithCleanupComponent';
import './App.css'; // Import the custom CSS

function App() {
  return (
    <div className="app-background">
      <Container className="my-5">
        <h1 className="text-center mb-4">React Components Showcase</h1>
        
        <Row className="mb-4">
          <Col>
            <DataFetchingComponent />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <EventListenerComponent />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <LocalStorageSyncComponent />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <DynamicTitleComponent />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <TimerWithCleanupComponent />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

//this is code of assignment 5