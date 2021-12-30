import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TreasedVideo from '../../../assets/videos/video2.mp4';

const TreaseredToken = () => {
    return (
        <div className='section-wrapper'>
            <Row className='mx-0 my-'>
                <Col md={5}>
                    <div className="right-side">
                        <h2>Treasured tokens </h2>
                        <p>A considered assortment of our most sought-after formulations—from signature hand washes to potent facial hydrators, to transportive aromas for the home. </p>

                        <button className='btn-design'><span>Browse favourite formulations</span> <i className="fas fa-long-arrow-alt-right"></i></button>
                    </div>
                </Col>
                <Col md={7}>
                    <video style={{width:'100%'}} autoPlay muted loop>
                        <source src={TreasedVideo} />
                    </video>
                </Col>
                
            </Row>
        </div>
    );
};

export default TreaseredToken;