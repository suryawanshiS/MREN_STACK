import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const LocalStorageExample = () => {
  const [value, setValue] = useLocalStorage('myValue', '');
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(input);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">useLocalStorage Hook Example</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicInput">
          <Form.Label>Enter Value:</Form.Label>
          <Form.Control
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type something..."
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Save to Local Storage
        </Button>
      </Form>
      {value && (
        <Alert variant="info" className="mt-4">
          Stored Value: {value}
        </Alert>
      )}
    </Container>
  );
};

export default LocalStorageExample;
