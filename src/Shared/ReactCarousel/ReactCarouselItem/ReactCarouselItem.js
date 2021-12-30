import React from 'react';
import './ReactCarouselItem.css'

const ReactCarouselItem = ({singleGift}) => {
    const {title, img, text} = singleGift;
    return (
        <div className='single-item-wrapper'>
            <div >
                <div>
                    <img src={img} className="img-fluid" alt="" style={{maxHeight:'425px'}}/>
                </div>
            </div>
            <h6 className='single-item-title'>{title}</h6>
            <p>{text}</p>

        </div>
    );
};

export default ReactCarouselItem;