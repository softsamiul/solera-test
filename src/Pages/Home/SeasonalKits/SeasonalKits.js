import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactCarousel from '../../../Shared/ReactCarousel/ReactCarousel';
import './SeasonalKits.css'

const SeasonalKits = () => {
    return (
        <div className='section-wrapper'>
            <Row className='mx-0'>
                <Col md={5}>
                    <h2>Seasonal Gift Kits</h2>
                </Col>
                <Col md={7}>
                    <div className='gift-section-right'>
                        <p>Comprising formulations for the skin, body and home, our Gift Kit collection is designed to recognise everyday acts of kindness, and reverberate beyond the first exchange. </p> 
                    </div>
                </Col>
            </Row>
            <Row className='my-5 mx-0'>
                <Container>
                    <ReactCarousel></ReactCarousel>
                </Container>
            </Row>
        </div>
    );
};

export default SeasonalKits;