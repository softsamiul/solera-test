import React from 'react';
import { Col, Row } from 'react-bootstrap';

const StoreLocator = () => {
    return (
        <div>
            <Row className='mx-0'>
                <Col md={4}>
                <h2>Store locator</h2>
                <p>Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
                <button>Find Nearby Store <i className="fas fa-long-arrow-alt-right"></i></button>
                </Col>
                <Col md={8}>
                    Carousel
                </Col>
            </Row>
            
        </div>
    );
};

export default StoreLocator;