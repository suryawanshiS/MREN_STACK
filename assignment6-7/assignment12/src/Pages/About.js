import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h2>About Us</h2>
                    <p>
                        We are passionate about bringing the best audio experiences to music lovers everywhere. Our mission is to provide high-quality music players that cater to a wide range of preferences and needs. 
                    </p>
                    <p>
                        At our store, we offer a carefully curated selection of music players, from budget-friendly options to high-end devices. Whether you’re an audiophile seeking the ultimate sound experience or a casual listener looking for a reliable and stylish player, we have something for everyone.
                    </p>
                    <p>
                        Our team is dedicated to helping you find the perfect music player that matches your lifestyle and audio preferences. We believe that great music deserves great sound, and we strive to deliver both with every product we offer.
                    </p>
                    <p>
                        Explore our range and experience the difference that quality and passion make. Your journey to better sound starts here.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
