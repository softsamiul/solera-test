import React from 'react';
import './Testomonial.css';
import Rotate from 'react-reveal/Rotate';

const Testimonial = () => {
    return (
        <div className='testimonial-wrapper'>
            <Rotate left>
                <div className='testimonial-content-wrapper'>
                    <h2 className='testimonial-title'>‘It is always the simple that produces the marvellous.’</h2>
                    <p className='testimonial-author'>Amelia Barr</p>
                </div>
            </Rotate>
            
        </div>
    );
};

export default Testimonial;