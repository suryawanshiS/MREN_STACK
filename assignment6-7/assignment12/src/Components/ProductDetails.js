import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button, Row, Col, Form } from 'react-bootstrap';

const products = [
    { id: 1, name: 'Portable Music Player', description: 'Compact and lightweight music player.', image: '/assets/images/product1.jpg' },
    { id: 2, name: 'Compact Music Player', description: 'Small yet powerful with advanced features.', image: '/assets/images/product2.jpg' },
    { id: 3, name: 'Premium Music Player', description: 'High-end audio player with exceptional sound quality.', image: '/assets/images/product3.jpg' }
];

const ProductDetails = () => {
    const { productId } = useParams();
    const product = products.find(p => p.id === parseInt(productId));

    // Handle form submission for rating
    const handleRatingSubmit = (e) => {
        e.preventDefault();
        // Here you can handle rating submission logic
        alert('Rating submitted!');
    };

    return (
        <Container className="mt-4">
            {product ? (
                <Row>
                    <Col md={6}>
                        <Card>
                            <Card.Img variant="top" src={product.image} alt={product.name} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <h3>Rate this Product</h3>
                        <Form onSubmit={handleRatingSubmit}>
                            <Form.Group controlId="formRating">
                                <Form.Label>Rating (1 to 5 stars)</Form.Label>
                                <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mt-3">
                                Submit Rating
                            </Button>
                        </Form>
                    </Col>
                </Row>
            ) : (
                <p>Product not found.</p>
            )}
        </Container>
    );
};

export default ProductDetails;
