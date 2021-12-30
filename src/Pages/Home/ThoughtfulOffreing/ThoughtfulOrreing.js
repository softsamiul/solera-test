import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Carousel } from '@trendyol-js/react-carousel';
import ThoughtfulOffreing from '../../../Datas/ThoughtfulOrreing';
import ReactCarouselItem from '../../../Shared/ReactCarousel/ReactCarouselItem/ReactCarouselItem';
import './ThoughtfulOffreing.css'

const ThoughtfulOrreing = () => {
    const thoughtfulOffers = ThoughtfulOffreing;
    return (
        <div className='section-wrapper'>
            <Container>
                <h2 className='thoughtful-title mb-5'>Thoughtful offerings </h2>
            </Container>
                <Row className='m-0'>
                    <Carousel show={3} slide={1} swiping={true} >
                        {
                            thoughtfulOffers.map(singleGift => <ReactCarouselItem singleGift={singleGift} key={singleGift.title}></ReactCarouselItem>)
                        }
                    </Carousel>
                    <div className='separator-div'></div>
                </Row>
        </div>
    );
};

export default ThoughtfulOrreing;