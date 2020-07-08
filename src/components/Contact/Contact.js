import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './Contact.scss'
import SectionHeading from '../SectionHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import ContactForm from './ContactForm'

export default class Contact extends Component {
    render() {
        return (
            <section className="contact" id="contact">
                <SectionHeading text="CONTACT ME" />
                <Row className="contact__row">
                    <Col>
                        <ul>
                            <p>Feel free to contact me on my email or through social media:</p>
                            <li><a href="mailto:m.hawelka@gmail.com">m.hawelka@gmail.com</a></li>
                            <li><a href="https://github.com/hawelkam" rel="noopener noreferrer" target="_blank" className="m-2"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                            <a href="https://www.linkedin.com/in/michalhawelka/" rel="noopener noreferrer" target="_blank" className="m-2"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                            <a href="https://medium.com/@michalhawelka" rel="noopener noreferrer" target="_blank" className="m-2"><FontAwesomeIcon icon={faMedium} size="2x" /></a></li>
                            <p>or use the contact form.</p>
                        </ul>
                    </Col>
                    <ContactForm />
                </Row>
            </section>
        )
    }
}