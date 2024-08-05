import React from 'react';
import useFetch from '../hooks/useFetch';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';

const FetchExample = () => {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) {
    return (
      <Container className="my-5">
        <h2 className="text-center mb-4">Loading...</h2>
        <Spinner animation="border" role="status" className="d-block mx-auto">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <h2 className="text-center mb-4">Error</h2>
        <Alert variant="danger" className="text-center">
          {error.message}
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Data</h2>
      <Row>
        {data && data.map((item, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FetchExample;
