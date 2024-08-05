import React, { useState, useEffect } from 'react';
import { Card, Spinner, Container, Row, Col } from 'react-bootstrap';

function DataFetchingComponent() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="mb-4">User Information</h2>
      <Row>
        {users.map((user) => (
          <Col md={4} key={user.id} className="mb-4">
            <Card>
              <Card.Header>{user.name}</Card.Header>
              <Card.Body>
                <Card.Title>{user.username}</Card.Title>
                <Card.Text>
                  <strong>Email:</strong> {user.email}
                </Card.Text>
                <Card.Text>
                  <strong>Phone:</strong> {user.phone}
                </Card.Text>
                <Card.Text>
                  <strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a>
                </Card.Text>
                <Card.Text>
                  <strong>Company:</strong> {user.company.name}
                </Card.Text>
                <Card.Text>
                  <strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DataFetchingComponent;
