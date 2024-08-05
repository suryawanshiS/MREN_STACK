import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function DynamicTitleComponent() {
  const [title, setTitle] = useState('');
  const [randomTitle, setRandomTitle] = useState('');

  const titlesArray = [
    "Welcome to My App",
    "React is Awesome",
    "Hello, World!",
    "Dynamic Titles FTW!",
    "Another Random Title",
  ];

  useEffect(() => {
    if (title) {
      document.title = title;
    } else if (randomTitle) {
      document.title = randomTitle;
    }
  }, [title, randomTitle]);

  const handleRandomTitle = () => {
    const randomIndex = Math.floor(Math.random() * titlesArray.length);
    setRandomTitle(titlesArray[randomIndex]);
    setTitle(''); // Clear the custom title input if random title is selected
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Dynamic Document Title</Card.Title>
              <Form>
                <Form.Group controlId="formTitle">
                  <Form.Label>Enter a custom document title</Form.Label>
                  <Form.Control
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter a title"
                  />
                </Form.Group>
                <div className="mt-3">
                  <Button variant="primary" onClick={() => document.title = title}>
                    Set Custom Title
                  </Button>{' '}
                  <Button variant="secondary" onClick={handleRandomTitle}>
                    Set Random Title
                  </Button>
                </div>
              </Form>
              <Card.Text className="mt-3">
                <strong>Current Title:</strong> {title || randomTitle || "No title set"}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DynamicTitleComponent;
