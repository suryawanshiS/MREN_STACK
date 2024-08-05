import React, { useState, useEffect } from 'react';
import { Form, Card, Container, Row, Col, Button } from 'react-bootstrap';

function LocalStorageSyncComponent() {
  const [name, setName] = useState(() => localStorage.getItem('name') || '');
  const [storedName, setStoredName] = useState(name);

  useEffect(() => {
    localStorage.setItem('name', name);
    setStoredName(name);
  }, [name]);

  const handleClear = () => {
    localStorage.removeItem('name');
    setName('');
    setStoredName('');
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Local Storage Sync</Card.Title>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Enter your name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                </Form.Group>
              </Form>
              <div className="mt-3">
                <Button variant="primary" onClick={() => setStoredName(name)}>
                  Save Name
                </Button>{' '}
                <Button variant="danger" onClick={handleClear}>
                  Clear Name
                </Button>
              </div>
              <Card.Text className="mt-3">
                <strong>Stored Name:</strong> {storedName ? storedName : 'No name stored.'}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LocalStorageSyncComponent;
