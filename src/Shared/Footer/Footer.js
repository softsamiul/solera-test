import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <Row className='mx-0'>
                <Col md={4}>
                    <div className='flex'>
                        <input type="text" placeholder='Email Address' />
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <p>Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our <span>Privacy Policy</span></p>
                    </div>
                </Col>
                <Col md={8}>
                    <Row className='mx-0'>
                        <Col md={4}>
                            <h4>Orders and support</h4>
                            <div className='hr'></div>
                            <ul>
                                <li>Contact Us</li>
                                <li>FAQs</li>
                                <li>Shipping</li>
                                <li>Returns </li>
                                <li>Order history </li>
                                <li>Terms and conditions </li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <h4>Orders and support</h4>
                            <div className='hr'></div>
                            <ul>
                                <li>Contact Us</li>
                                <li>FAQs</li>
                                <li>Shipping</li>
                                <li>Returns </li>
                                <li>Order history </li>
                                <li>Terms and conditions </li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <h4>Orders and support</h4>
                            <div className='hr'></div>
                            <ul>
                                <li>Contact Us</li>
                                <li>FAQs</li>
                                <li>Shipping</li>
                                <li>Returns </li>
                                <li>Order history </li>
                                <li>Terms and conditions </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='mx-0 mt-5'>
                <Col md={4}>
                    <div className='flex'>
                        <input type="text" placeholder='Email Address' />
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <p>Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our <span>Privacy Policy</span></p>
                    </div>
                </Col>
                <Col md={8}>
                    <Row className='mx-0'>
                        <Col md={4}>
                            <h4>Orders and support</h4>
                            <div className='hr'></div>
                            <ul>
                                <li>Contact Us</li>
                                <li>FAQs</li>
                                <li>Shipping</li>
                                <li>Returns </li>
                                <li>Order history </li>
                                <li>Terms and conditions </li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <h4>Orders and support</h4>
                            <div className='hr'></div>
                            <ul>
                                <li>Contact Us</li>
                                <li>FAQs</li>
                                <li>Shipping</li>
                                <li>Returns </li>
                                <li>Order history </li>
                                <li>Terms and conditions </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className='hr'></div>
            <p>Aesop</p>
        </div>
    );
};

export default Footer;