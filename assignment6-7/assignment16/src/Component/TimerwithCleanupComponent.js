import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

function TimerWithCleanupComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Timer</Card.Title>
        <Card.Text>{seconds} seconds</Card.Text>
        <Button variant="primary" onClick={() => setSeconds(0)}>Reset Timer</Button>
      </Card.Body>
    </Card>
  );
}

export default TimerWithCleanupComponent;
