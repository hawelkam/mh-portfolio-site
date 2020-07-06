import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import './Contact.scss'
import SectionHeading from '../SectionHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
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
                <Col>
                    <Form className="contact-form">
                        <Form.Group controlId="form.name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name..." />
                        </Form.Group>
                        <Form.Group controlId="form.email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Email..." />
                        </Form.Group>
                        <Form.Group controlId="form.message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="6" />
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </section>
    )
}

export default Contact
