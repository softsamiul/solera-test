import React from 'react';
import { Col, Row } from 'react-bootstrap';
import GiftsData from '../../../Datas/ExploreGiftsData';
import './GiftExplore.css'

const GisftsExplore = () => {
    const gifts = GiftsData;

    return (
        <div className='gift-explore-section section-wrapper'>
            <Row className='mx-0'>
                {
                    gifts.map(gift => <Col md={6} key={gift.title}>
                        <div>
                            <img src={gift.thumbnail} alt="" className='img-fluid' />
                        </div>
                        <h4 className='my-3'>{gift.title}</h4>
                        <p>{gift.desc}</p>
                    </Col> )
                }
                {/* <Col md={6}>
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
                </Col> */}
            </Row>
        </div>
    );
};

export default GisftsExplore;