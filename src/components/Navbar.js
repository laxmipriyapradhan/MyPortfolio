import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgFileDocument, CgGitFork } from "react-icons/cg";
import './NavBar.css'

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 10) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="Miss"
      className={navColour ? "sticky" : "navbar"}

    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <h3 className="purple" style={{ marginTop: '10px' }}><b>Portfolio</b></h3>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">


            <Nav.Item className="fork-btn" style={{ position: 'absolute', top: 0, right: '770px' }}>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <AiOutlineHome style={{ marginRight: '5px' }} /> Home
                </div>
              </Nav.Link>
            </Nav.Item>







            <Nav.Item className="fork-btn" style={{ position: 'absolute', top: 0, right: '650px' }}>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <AiOutlineUser style={{ marginRight: '5px' }} /> About
                </div>
              </Nav.Link>
            </Nav.Item>





            <Nav.Item className="fork-btn" style={{ position: 'absolute', top: 0, right: '490px' }}>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <CgFileDocument style={{ marginRight: '5px' }} /> Resume
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn" style={{ position: 'absolute', top: 0, right: '350px' }}>
              <Nav.Link as={Link} to="/contact" onClick={() => updateExpanded(false)}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <CgFileDocument style={{ marginRight: '5px' }} /> Contact
                </div>
              </Nav.Link>
            </Nav.Item>




            <Nav.Item className="fork-btn" style={{ position: 'absolute', top: 10, right: '250px' }}>
              <Button href="https://github.com/laxmipriyapradhan" target="_blank" className="fork-btn-inner">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <CgGitFork style={{ fontSize: '1.2em', marginRight: '5px' }} />
                  <AiFillStar style={{ fontSize: '1.1em' }} />
                </div>
              </Button>
            </Nav.Item>




          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
