import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function EventListenerComponent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Window Resize Event Listener</Card.Title>
              <Card.Text>
                Resize the window to see the effect of the event listener.
              </Card.Text>
              <Card.Text className="mt-3">
                <strong>Current Window Width:</strong> {windowWidth}px
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default EventListenerComponent;
