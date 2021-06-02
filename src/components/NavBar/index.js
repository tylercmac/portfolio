import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';
// import "bootstrap/js/src/collapse.js";


export default function NavBar() {
  return (
    <>
    <Navbar id="my-nav" expand='lg' variant="light">
      <Navbar.Brand href="/" id="navigator"></Navbar.Brand>
      <Navbar.Toggle aria-controls="my-navbar" />
      <Navbar.Collapse id="my-navbar">
        <Nav className="mr-auto">
          <hr className="nav-line" />
          <Nav.Link href="#scroll-to-one" className="nav-text">About</Nav.Link>
          <hr className="nav-line"/>
          <Nav.Link href="#scroll-to-two" className="nav-text">My Work</Nav.Link>
          <hr className="nav-line"/>
          <Nav.Link href="#final-scroll" className="nav-text">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
    <nav className="shift">
    <ul>
      <li><a href="#scroll-to-one">About</a></li>
      <li><a href="#scroll-to-two" className="middle-link">My Work</a></li>
      <li><a href="#final-scroll">Contact Me</a></li>
    </ul>
  </nav>
  </>
  
  )
}
