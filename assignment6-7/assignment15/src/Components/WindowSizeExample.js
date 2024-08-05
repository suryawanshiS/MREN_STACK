import React from 'react';
import useWindowSize from '../hooks/useWindowSize';
import { Container, Row, Col, Card } from 'react-bootstrap';

const WindowSizeExample = () => {
  const { width, height } = useWindowSize();

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">useWindowSize Hook Example</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Window Size</Card.Title>
              <Card.Text>
                Width: {width}px<br />
                Height: {height}px
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WindowSizeExample;
