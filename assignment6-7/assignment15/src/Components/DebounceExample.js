import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import { Container, Form, Card } from 'react-bootstrap';

const DebounceExample = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // Debounce with 500ms delay

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">useDebounce Hook Example</h2>
      <Form>
        <Form.Group controlId="formBasicInput">
          <Form.Label>Enter Value:</Form.Label>
          <Form.Control
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type something..."
          />
        </Form.Group>
      </Form>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Debounced Value:</Card.Title>
          <Card.Text>{debouncedValue}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DebounceExample;
