import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Metamask from "../components/MetamaskLoginButton";
import "../App.css";
import BC from "../assets/images/saubc-white.png"
import BC2 from "../assets/images/saubc.png"

function MyNavbar() {
  return (
    <Navbar expand="lg" className='navbar-custom navbar-dark' fixed='top'>
      <Navbar.Brand href="#home">
        <div class="image-container">
          <img width="40px" src={BC} alt="Brand Logo"/>
          <img width= "120px" src={BC2} alt="Brand Logo2" class="hover-image"/>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end navbar-light'>
        <Nav className="mr-auto">
          <Nav.Link href="/">Ana Sayfa</Nav.Link>
          <Nav.Link href="blog">Blog</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            <Metamask/>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
