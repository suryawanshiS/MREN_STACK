import React, { useState, useEffect } from 'react';
import { Container, Button, Card, Col, Row, Modal, Spinner } from 'react-bootstrap';

// Sample product data with images and other details
const products = [
  { id: 1, name: 'Product 1', description: 'Brief description of Product 1', price: '$10', color: 'Red', model: 'Model X', image: 'https://m.media-amazon.com/images/I/41g-ku4smmL._SX679_.jpg' },
  { id: 2, name: 'Product 2', description: 'Brief description of Product 2', price: '$20', color: 'Blue', model: 'Model Y', image: 'https://m.media-amazon.com/images/I/81Oxwq8CePL._SX679_.jpg' },
  { id: 3, name: 'Product 3', description: 'Brief description of Product 3', price: '$30', color: 'Green', model: 'Model Z', image: 'https://m.media-amazon.com/images/I/71ftBTXfsbL._SX522_.jpg' },
];

function ProductList() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading with a timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <Container className="mt-5">
      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-3">Loading products...</p>
        </div>
      ) : (
        <>
          <h1>Product List</h1>
          <Row>
            {products.map(product => (
              <Col md={4} className="mb-4" key={product.id}>
                <Card>
                  <Card.Img variant="top" src={product.image} alt={product.name} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Button onClick={() => handleShow(product)} variant="primary">
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      {selectedProduct && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="img-fluid mb-3" />
            <p><strong>Description:</strong> {selectedProduct.description}</p>
            <p><strong>Price:</strong> {selectedProduct.price}</p>
            <p><strong>Color:</strong> {selectedProduct.color}</p>
            <p><strong>Model:</strong> {selectedProduct.model}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default ProductList;
