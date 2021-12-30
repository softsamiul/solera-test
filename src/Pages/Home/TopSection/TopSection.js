import React from 'react';
import './TopSection.css';
import Slide from 'react-reveal/Slide';

const TopSection = () => {
    return (
        <div className='top-section'>
            {/* Top Section start */}
            <Slide top>
                <div className="top-section-wrapper">
                <p className='top-message'>Enjoy complimentary shipping on all Hong Kong and Macau orders. Due to a high volume of orders, deliveries may take longer than usual to arrive. <i className="fas fa-plus ps-2" style={{fontSize:'14px'}}></i></p>
                </div>
            </Slide>
            
        </div>
    );
};

export default TopSection;