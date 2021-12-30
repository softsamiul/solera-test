import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';
import Slide from 'react-reveal/Slide';

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <Slide bottom>
                <Row className='mx-0'>
                    <Col md={4}>
                        <div className='email-us'>
                            <input type="text" placeholder='Email Address' className='email-input' />
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </div>
                        <div className='checkbox-privacy'>
                            <input type="checkbox" className='checkbox'/>
                            <p>Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our <span>Privacy Policy <i className="fas fa-external-link-alt ms-2"></i></span></p>
                        </div>
                    </Col>
                    <Col md={8}>
                        <Row className='mx-0'>
                            <Col md={4}>
                                <h6>Orders and support</h6>
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
                                <h6>Orders and support</h6>
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
                                <h6>Orders and support</h6>
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
                        <div className='footer-bottom-row'>
                            <h6>Orders and support</h6>
                            <div className='hr'></div>
                            <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                        </div>
                    </Col>
                    <Col md={8}>
                        <Row className='mx-0'>
                            <Col md={4}>
                                <h6>Orders and support</h6>
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
                                <h6>Orders and support</h6>
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
                <p className='copy-right'> &copy; Aesop</p>
            </Slide>
        </div>
    );
};

export default Footer;