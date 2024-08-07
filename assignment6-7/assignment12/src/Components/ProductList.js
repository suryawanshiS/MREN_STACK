import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: 'Portable Music Player', description: 'Compact and lightweight music player.', image: 'https://m.media-amazon.com/images/I/41g-ku4smmL._SX679_.jpg' },
    { id: 2, name: 'Compact Music Player', description: 'Small yet powerful with advanced features.', image: 'https://m.media-amazon.com/images/I/81Oxwq8CePL._SX679_.jpg' },
    { id: 3, name: 'Premium Music Player', description: 'High-end audio player with exceptional sound quality.', image: 'https://m.media-amazon.com/images/I/71ftBTXfsbL._SX522_.jpg' }
];

const ProductList = () => {
    return (
        <Container className="mt-4">
            <Row>
                {products.map(product => (
                    <Col md={4} key={product.id}>
                        <Card>
                            <Card.Img variant="top" src={product.image} alt={product.name} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Link to={`/product/${product.id}`}>
                                    <Button variant="primary">View Details</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductList;
