import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="mt-4">
            <Row className="align-items-center" style={{ minHeight: '400px', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '5px' }}>
                <Col>
                    <h1>Welcome to the Music Store!</h1>
                    <p>
                        Discover a wide range of high-quality music players to suit all your audio needs.
                    </p>
                    <p>
                        <Button variant="primary" href="/products">Browse Products</Button>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
