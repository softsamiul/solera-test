import React from 'react';
import { Col, Row } from 'react-bootstrap';
import GiftHome from '../../../assets/images/gift-for-home.webp';
import SelfCare from '../../../assets/images/gitt-for-self-care.webp';
import './GiftExplore.css'

const GisftsExplore = () => {
    return (
        <div className='gift-explore-section'>
            <Row className='mx-0'>
                <Col md={6}>
                    <div>
                        <img src={GiftHome} alt="" className='img-fluid'/>
                    </div>
                    <h4 className='my-3'>Gifts for home </h4>
                    <p>Revitalise indoor spaces with gifts designed to illuminate space and instil atmosphere. Each is formulated to set the mood, calm the mind and refresh the mundane. </p>
                </Col>
                <Col md={6}>
                    <div>
                        <img src={SelfCare} alt="" className='img-fluid' />
                    </div>
                    <h4 className='my-3'>Gifts for SelfCare </h4>
                    <p>Revitalise indoor spaces with gifts designed to illuminate space and instil atmosphere. Each is formulated to set the mood, calm the mind and refresh the mundane. </p>
                </Col>
            </Row>
        </div>
    );
};

export default GisftsExplore;