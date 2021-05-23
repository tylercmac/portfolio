import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';
// import "bootstrap/js/src/collapse.js";


export default function NavBar() {
  return (
    <Navbar id="my-nav" expand='lg' variant="light">
      <Navbar.Brand href="/" id="navigator">Navigator</Navbar.Brand>
      <Navbar.Toggle aria-controls="my-navbar" />
      <Navbar.Collapse id="my-navbar">
        <Nav className="mr-auto">
          <hr />
          <Nav.Link href="#scroll-to-one">About</Nav.Link>
          <hr />
          <Nav.Link href="#scroll-to-two">My Work</Nav.Link>
          <hr />
          <Nav.Link href="#final-scroll">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  
  )
}
