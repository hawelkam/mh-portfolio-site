import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-scroll";


const TopBar = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="primary">
                <Navbar.Brand className="header__logo">MICHAŁ<b>HAWEŁKA</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="text-uppercase">
                        <Link to="hero" className="nav-link m-2" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
                        <Link to="about" className="nav-link m-2" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>About Me</Link>
                        <Link to="skills" className="nav-link m-2" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
                        <Link to="projects" className="nav-link m-2" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
                        <Link to="testimonials" className="nav-link m-2" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Testimonials</Link>
                        <Link to="contact" className="nav-link m-2" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default TopBar
