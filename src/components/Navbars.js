import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Navbars.css'
import Nav from 'react-bootstrap/Nav';
const Navbars = () => {
    return (
        <Navbar expand="lg" variant="light" bg="body" className='justify-content-between shadow-sm'>
      <Container>
        <Navbar.Brand href="#" className='mx-1' style={{ fontWeight: 'bold',color:'#023047'}}>ATools<span className='text-danger'>.</span></Navbar.Brand>
        <Nav className="d-none d-md-block d-lg-block w-25">
        <div className="d-flex  justify-content-between">
        <input className="form-control text-white w-50" type="button" value="Start Free Trial" style={{backgroundColor:'#023047'}} />
        <input className="form-control text-white w-50" type="button" value="Login" style={{backgroundColor:'#FB8500'}} /></div>
          </Nav>
      </Container>
    </Navbar>
    );
};

export default Navbars;