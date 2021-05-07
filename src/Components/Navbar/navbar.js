import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Nico from "./nicologo.png";

import { Link } from "react-scroll";

// import logo from "../../logo.jpg";

const Nabar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <div className="container " variant="light">
        <Navbar.Brand className="navbarbrand" href="#home">
          <img className="mylogonico" src={Nico} alt="nico" />
        </Navbar.Brand>
        <Navbar.Toggle variant="light" aria-controls="basic" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navlinks buttonHover">
            <Link
              smooth={true}
              offset={-110}
              to="home"
              className="text-white active"
              href="#"
            >
              Home
            </Link>
            <Link
              smooth={true}
              offset={40}
              to="aboutme"
              className="text-white active"
              href="#"
            >
              About Me
            </Link>
            <Link
              smooth={true}
              offset={-160}
              to="experience"
              className="text-white active"
              href="#"
            >
              Experiences
            </Link>
            <Link
              smooth={true}
              offset={-160}
              to="Portafolio"
              className="text-white active"
              href="#"
            >
              Portafolio
            </Link>
            <Link
              smooth={true}
              offset={-110}
              to="contactme"
              className="text-white active"
              href="#"
            >
              Contact Me
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Nabar;
