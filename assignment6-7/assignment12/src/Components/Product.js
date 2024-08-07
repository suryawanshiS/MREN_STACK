import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const products = [
    {
        id: 1,
        name: 'Music Player 1',
        description: 'A portable music player with high-quality sound and long battery life.',
        price: '$59.99',
        features: ['High-resolution audio', 'Bluetooth 5.0', 'Expandable storage'],
        image: '/assets/images/product1.jpg',
    },
    {
        id: 2,
        name: 'Music Player 2',
        description: 'A compact and lightweight music player with advanced equalizer settings.',
        price: '$89.99',
        features: ['Customizable EQ', 'Wi-Fi support', 'Touchscreen display'],
        image: '/assets/images/product2.jpg',
    },
    {
        id: 3,
        name: 'Music Player 3',
        description: 'A premium music player with exceptional build quality and sound clarity.',
        price: '$129.99',
        features: ['DAC support', 'High-capacity battery', 'Metal body'],
        image: '/assets/images/product3.jpg',
    },
];

const Product = () => {
    const { productId } = useParams();
    const product = products.find(p => p.id === parseInt(productId));

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <Container className="mt-4">
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Img variant="top" src={product.image} alt={product.name} />
                    </Card>
                </Col>
                <Col md={6}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <h4 className="text-primary">Price: {product.price}</h4>
                    <h5>Features:</h5>
                    <ListGroup variant="flush">
                        {product.features.map((feature, index) => (
                            <ListGroup.Item key={index}>{feature}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Product;
