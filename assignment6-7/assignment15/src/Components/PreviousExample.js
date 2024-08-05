import React, { useState } from 'react';
import usePrevious from '../hooks/usePrevious';
import { Container, Form, Card } from 'react-bootstrap';

const PreviousExample = () => {
  const [value, setValue] = useState('');
  const prevValue = usePrevious(value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">usePrevious Hook Example</h2>
      <Form>
        <Form.Group controlId="formBasicInput">
          <Form.Label>Enter Value:</Form.Label>
          <Form.Control
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Type something..."
          />
        </Form.Group>
      </Form>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Current Value:</Card.Title>
          <Card.Text>{value}</Card.Text>
        </Card.Body>
      </Card>
      <Card className="mt-2">
        <Card.Body>
          <Card.Title>Previous Value:</Card.Title>
          <Card.Text>{prevValue !== undefined ? prevValue : 'N/A'}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PreviousExample;
