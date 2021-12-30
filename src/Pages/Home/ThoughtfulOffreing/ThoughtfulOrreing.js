import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Carousel } from '@trendyol-js/react-carousel';
import ThoughtfulOffreing from '../../../Datas/ThoughtfulOrreing';
import ReactCarouselItem from '../../../Shared/ReactCarousel/ReactCarouselItem/ReactCarouselItem';
import './ThoughtfulOffreing.css';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';


const ThoughtfulOrreing = () => {
    const thoughtfulOffers = ThoughtfulOffreing;
    return (
        <div className='section-wrapper'>
            <Container>
                <Zoom left>
                    <h2 className='thoughtful-title mb-5'>Thoughtful offerings </h2>
                </Zoom>
                
            </Container>
                <Row className='m-0'>
                    <Slide right>
                        <div className='large-device-carousel'>
                            <Carousel show={3} slide={1} swiping={true} >
                                {
                                    thoughtfulOffers.map(singleGift => <ReactCarouselItem singleGift={singleGift} key={singleGift.title}></ReactCarouselItem>)
                                }
                            </Carousel>
                        </div>
                        <div className='mobile-device-carousel'>
                            <Carousel show={1} slide={1} swiping={true} >
                                {
                                    thoughtfulOffers.map(singleGift => <ReactCarouselItem singleGift={singleGift} key={singleGift.title}></ReactCarouselItem>)
                                }
                            </Carousel>
                        </div>
                    </Slide>
                    <div className='separator-div'></div>
                </Row>
        </div>
    );
};

export default ThoughtfulOrreing;