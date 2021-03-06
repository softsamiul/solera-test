import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import { Row } from 'react-bootstrap';
import GiftsCarouselData from '../../Datas/GiftsCarouselData';
import ReactCarouselItem from './ReactCarouselItem/ReactCarouselItem';
const ReactCarousel = () => {

    const giftCarousel = GiftsCarouselData;
    return (

        <div>
            <Row className='mx-0'>
                <div className='large-device-carousel'>
                    <Carousel show={3.5} slide={1} swiping={true} >

                        {
                            giftCarousel.map(singleGift => <ReactCarouselItem singleGift={singleGift} key={singleGift.title}></ReactCarouselItem>)
                        }
                    </Carousel>
                </div>
                <div className='mobile-device-carousel'>
                    <Carousel show={1} slide={1} swiping={true} >

                        {
                            giftCarousel.map(singleGift => <ReactCarouselItem singleGift={singleGift} key={singleGift.title}></ReactCarouselItem>)
                        }
                    </Carousel>
                </div>
                
                <div className='separator-div'></div>
            </Row>
        </div>
    );
};

export default ReactCarousel;