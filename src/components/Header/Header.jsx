import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
            <Link to='/' className=' fs-4 fw-light text-decoration-none text-black border border-1 ps-2 pe-2 border-primary box_shadow_hover'>S.A</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item className='ms-auto mt-0 mb-0 me-auto'>
                <Link className='text-decoration-none text-black me-4 fw-normal hover-act' to='/about'>About</Link>
                <Link className='text-decoration-none text-black me-4 fw-normal hover-act' to='/projects'>Projects</Link>
                <Button variant='primary'>Download Resume</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header