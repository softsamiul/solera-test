import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css'
const Navigation = () => {
    return (
        
        <Navbar collapseOnSelect expand="lg" className='navbar-container'>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='custom-navbar-container' style={{lineHeight:'1.4'}}/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#features custom-nav-item" style={{fontWeight:600, color: '#333', fontSize:'14px', marginRight:'18px'}}>Skin Care</Nav.Link>
                    <Nav.Link href="#pricing" style={{fontWeight:600, color: '#333', fontSize:'14px', marginRight:'18px'}}>{'Body & Hand'}</Nav.Link>
                    <Nav.Link href="#pricing" style={{fontWeight:600, color: '#333', fontSize:'14px', marginRight:'18px'}}>Hair</Nav.Link>
                    <Nav.Link href="#pricing" style={{fontWeight:600, color: '#333', fontSize:'14px', marginRight:'18px'}}>Fragrance</Nav.Link>
                    <Nav.Link href="#pricing" style={{fontWeight:600, color: '#333', fontSize:'14px', marginRight:'18px'}}>Home</Nav.Link>
                    <Nav.Link href="#pricing" style={{fontWeight:600, color: '#333', fontSize:'14px', marginRight:'18px'}}>Kits & Travel</Nav.Link>
                    <Nav.Link href="#pricing" style={{fontWeight:600, color: '#333', fontSize:'14px', marginRight:'18px'}}>Gifts</Nav.Link>
                    <Nav.Link href="#pricing" style={{fontWeight:600, color: '#333', fontSize:'14px', marginRight:'18px'}}>Read</Nav.Link>
                    <Nav.Link href="#pricing" style={{fontWeight:600, color: '#333', fontSize:'14px', marginRight:'18px'}}>Stores</Nav.Link>
                    <Nav.Link href="#pricing" style={{fontWeight: 'bold', fontSize:'12px', color:'#666666'}}><i className="fas fa-search"></i></Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets" style={{fontWeight:600, color: '#333', fontSize:'14px', marginRight:'18px'}}>Login</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes" style={{fontWeight:600, color: '#333', fontSize:'14px', marginRight:'18px'}}>
                        Cart
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;