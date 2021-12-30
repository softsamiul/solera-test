import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import storeLocatorData from '../../../Datas/StoreLocatorData';
import './StoreLocator.css';
import Fade from 'react-reveal/Fade';

const StoreLocator = () => {
    const storeLocator = storeLocatorData;
    return (
        <div className='section-wrapper'>
            <Row className='mx-0'>
                <Col md={5} className=''>
                    <Fade left>
                        <div className='store-left'>
                            <h2>Store locator</h2>
                            <p>Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
                            <button className='btn-design'><span>Find Nearby Store</span> <i className="fas fa-long-arrow-alt-right"></i></button>
                        </div>
                    </Fade>
                    
                </Col>
                <Col md={7}>
                    <Fade right>
                        <Carousel indicators={false}>
                            {storeLocator.map(store => <Carousel.Item interval={1000}>
                                <img
                                className="d-block w-100 img-fluid"
                                src={store.img} alt='store img'
                                />
                            </Carousel.Item> )}

                            
                        </Carousel>
                    </Fade>
                </Col>
            </Row>
            
        </div>
    );
};

export default StoreLocator;