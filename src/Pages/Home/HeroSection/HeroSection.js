import React from 'react';
import { Col, Row } from 'react-bootstrap';
import coverMain from '../../../assets/images/cover-main.webp';
import CoverLite from '../../../assets/images/cover-lite.webp';
import './HeroSection.css';
import Fade from 'react-reveal/Fade';

const HeroSection = () => {
    return (
        <div className='hero-section' data-aos="fade-right">
            <Row className='flex justify-content-center m-0'>
                <Col md={2}>
                    <Fade left>
                        <h2 className='mt-150 hero-tag' >Aesop</h2>
                    </Fade>
                    
                </Col>
                <Col md={4} className='hero-text'>
                    <Fade bottom>
                        <div className='right-side'>
                            <h2 className='mt-150 hero-middle-tag'>Gift selection, simplified</h2>
                            <p className='right-side-para'>Bring joy to deserving recipients of all stripes with a carefully curated selection of formulations for the skin, body and home. </p>

                            <button className='btn-design'><span>Browse All Gift</span> <i className="fas fa-long-arrow-alt-right"></i></button>
                        </div>
                    </Fade>
                </Col>
                <Col md={6}>
                    <Fade right>
                        <div>
                            <div className='cover-main'>
                                <img className='cover-main-img' src={coverMain} alt="" />
                            </div>
                            <div className='cover-lite'>
                                <img className='cover-lite-img' src={CoverLite} alt="" />
                            </div>
                        </div>
                    </Fade>
                </Col>
            </Row>
        </div>
    );
};

export default HeroSection;