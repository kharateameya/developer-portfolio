import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-scroll";

const Header = () => {

  return (
    <div id='home'>
        <Navbar collapseOnSelect fixed="top" bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand>Ameya.dev</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link>
            <Link to='home' spy={true} smooth={true} offset={-150} duration={100} >Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='about' spy={true} smooth={true} offset={-150} duration={100} >About</Link>
            </Nav.Link>
            <Nav.Link>
            <Link to='project' spy={true} smooth={true} offset={-100} duration={100} >Project</Link>
            </Nav.Link>
            <Nav.Link>
            <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} >Contact</Link>
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header