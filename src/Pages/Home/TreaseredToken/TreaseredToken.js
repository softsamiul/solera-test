import React from 'react';
import { Col, Row } from 'react-bootstrap';

const TreaseredToken = () => {
    return (
        <div className='section-wrapper'>
            <Row className='mx-0 my-'>
                <Col md={5}>
                    <div className="right-side">
                        <h2>Treasured tokens </h2>
                        <p>A considered assortment of our most sought-after formulations—from signature hand washes to potent facial hydrators, to transportive aromas for the home. </p>

                        <button className='btn-design'><span>Browse favourite formulations</span> <i className="fas fa-long-arrow-alt-right"></i></button>
                    </div>
                </Col>
                <Col md={7}>
                    <video style={{width:'100%'}} autoPlay muted loop>
                        <source src="https://vod-progressive.akamaized.net/exp=1640825989~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2787%2F25%2F638938995%2F2928070564.mp4~hmac=d1c859cd525a635c86918561deba2a960d8bff41ad4c839a25cb1879431affab/vimeo-prod-skyfire-std-us/01/2787/25/638938995/2928070564.mp4?filename=Gift+Kits+2021-22+Campaign+Motion+ACT+5_Res_Handwash_landscape.mov.mp4" type="video/mp4" />
                    </video>
                </Col>
                
            </Row>
        </div>
    );
};

export default TreaseredToken;