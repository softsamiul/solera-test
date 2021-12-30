import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Indispensables = ({data}) => {
    const {media, title, actionText, desc} = data;
    return (
        <div>
            <Row className='section-wrapper mx-0' >
                <Col md={7}>
                    <Fade left>
                        <div>
                            <img src={media} alt="" className='img-fluid' />
                        </div>
                    </Fade>
                </Col>
                <Col md={5}>
                    <Fade right>
                        <div className='right-side'>
                            <h2>{title}</h2>
                            <p>{desc}</p>

                            <button className='btn-design'><span>{actionText}</span> <i className="fas fa-long-arrow-alt-right"></i></button>
                        </div>
                    </Fade>
                </Col>
            </Row>
        </div>
    );
};

export default Indispensables;