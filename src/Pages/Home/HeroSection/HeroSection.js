import React from 'react';
import { Col, Row } from 'react-bootstrap';
import coverMain from '../../../assets/images/cover-main.webp';
import CoverLite from '../../../assets/images/cover-lite.webp';
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <Row className='flex justify-content-center m-0'>
                <Col md={2}>
                    <h2 className='mt-150 hero-tag' >Aesop</h2>
                </Col>
                <Col md={4} className='hero-text'>
                    <div className='right-side'>
                        <h2 className='mt-150 hero-middle-tag'>Gift selection, simplified</h2>
                        <p className='right-side-para'>Bring joy to deserving recipients of all stripes with a carefully curated selection of formulations for the skin, body and home. </p>

                        <button className='btn-design'><span>Browse All Gift</span> <i className="fas fa-long-arrow-alt-right"></i></button>
                    </div>
                </Col>
                <Col md={6}>
                    <div>
                        <div className='cover-main'>
                            <img className='cover-main-img' src={coverMain} alt="" />
                        </div>
                        <div className='cover-lite'>
                            <img className='cover-lite-img' src={CoverLite} alt="" />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default HeroSection;