import React from 'react';
import { Col, Row } from 'react-bootstrap';
import GiftsData from '../../../Datas/ExploreGiftsData';
import './GiftExplore.css';
import Fade from 'react-reveal/Fade';


const GisftsExplore = () => {
    const gifts = GiftsData;

    return (
        <div className='gift-explore-section section-wrapper'>
            <Row className='mx-0'>
                {
                    gifts.map(gift => <Col md={6} key={gift.title}>
                        <Fade left>
                            <div>
                                <img src={gift.thumbnail} alt="" className='img-fluid' />
                            </div>
                            <h4 className='my-3'>{gift.title}</h4>
                            <p>{gift.desc}</p>
                        </Fade>
                    </Col> )
                }
            </Row>
        </div>
    );
};

export default GisftsExplore;