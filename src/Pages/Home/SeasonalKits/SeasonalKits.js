import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactCarousel from '../../../Shared/ReactCarousel/ReactCarousel';
import './SeasonalKits.css';
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';

const SeasonalKits = () => {
    return (
        <div className='section-wrapper'>
            <Row className='mx-0'>
                <Col md={5}>
                    <Rotate left>
                        <h2>Seasonal Gift Kits</h2>
                    </Rotate>
                </Col>
                <Col md={7}>
                    <Rotate right>
                        <div className='gift-section-right'>
                            <p>Comprising formulations for the skin, body and home, our Gift Kit collection is designed to recognise everyday acts of kindness, and reverberate beyond the first exchange. </p> 
                        </div>
                    </Rotate>
                </Col>
            </Row>
            <Row className='my-5 mx-0'>
                <Slide left>
                    <Container>
                        <ReactCarousel></ReactCarousel>
                    </Container>
                </Slide>
                
            </Row>
        </div>
    );
};

export default SeasonalKits;