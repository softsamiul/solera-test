import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './FriendlyFaces.css'

const FriendlyFaces = () => {
    return (
        <div>
            <Row className='section-wrapper mx-0' >
                <Col md={7}>
                    <video style={{width:'100%'}} autoPlay muted loop>
                        <source src="https://vod-progressive.akamaized.net/exp=1640821732~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2782%2F25%2F638914554%2F2927958859.mp4~hmac=e1ca2c22e2ac1e48b570bcffe329a03bfa085f0bb662c924aa09ff1ffd2d6fbb/vimeo-prod-skyfire-std-us/01/2782/25/638914554/2927958859.mp4?filename=Gift+Kits+2021-22+Campaign+Motion+ACT+5_Parsley_Seed_Replacement_landscape.mov.mp4" type="video/mp4" />
                    </video>
                </Col>
                <Col md={5}>
                    <div className='right-side'>
                        <h2>For friendly faces</h2>
                        <p>Selections of cherished skin care—some for the novice with empty bathroom cabinets, others for the well-stocked expert. </p>

                        <button className='btn-design'><span>Browse Skin Care Gifts</span> <i className="fas fa-long-arrow-alt-right"></i></button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default FriendlyFaces;