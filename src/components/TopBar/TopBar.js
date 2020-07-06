import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-scroll";
import './TopBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'


const TopBar = ({sticky}) => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="primary" className="sticky">
                <Navbar.Brand className="header__logo">MICHAŁ<b>HAWEŁKA</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="text-uppercase align-items-center">
                        <Link to="hero" className="nav-link m-2" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
                        <Link to="about" className="nav-link m-2" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>About Me</Link>
                        <Link to="skills" className="nav-link m-2" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
                        <Link to="projects" className="nav-link m-2" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
                        {/* <Link to="testimonials" className="nav-link m-2" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Testimonials</Link> */}
                        <Link to="contact" className="nav-link m-2" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
                        <a href="https://github.com/hawelkam" rel="noopener noreferrer" target="_blank" className="nav-link m-2"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                        <a href="https://www.linkedin.com/in/michalhawelka/" rel="noopener noreferrer" target="_blank" className="nav-link m-2"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                        <a href="https://medium.com/@michalhawelka" rel="noopener noreferrer" target="_blank" className="nav-link m-2"><FontAwesomeIcon icon={faMedium} size="2x" /></a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default TopBar
