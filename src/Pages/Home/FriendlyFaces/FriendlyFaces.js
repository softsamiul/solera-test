import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './FriendlyFaces.css';
import Slide from 'react-reveal/Slide';

const FriendlyFaces = ({data}) => {
    const {media, title, actionText, desc} = data;
    return (
        <div data-aos="fade-left">
            <Row className='section-wrapper mx-0' >
                <Col md={7} >
                    <Slide left>
                        <video style={{width:'100%'}} autoPlay muted loop>
                            <source src={media} type="video/mp4" />
                        </video>
                    </Slide>
                    
                </Col>
                <Col md={5}>
                    <Slide right>
                        <div className='right-side'>
                            <h2>{title}</h2>
                            <p>{desc}</p>

                            <button className='btn-design'><span>{actionText}</span> <i className="fas fa-long-arrow-alt-right"></i></button>
                        </div>
                    </Slide>
                </Col>
            </Row>
        </div>
    );
};

export default FriendlyFaces;