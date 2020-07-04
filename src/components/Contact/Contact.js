import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Contact.scss'
import SectionHeading from '../SectionHeading'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <SectionHeading text="CONTACT ME" />
            <Row>
                <Col>
                    <p>Feel free to contact me on my email or through social media:</p>
                    <ul>
                        <li>m.hawelka@gmail.com</li>
                        <li>LinkedIn
                        </li>
                        <li>GitHub</li>
                    </ul>
                </Col>
                <Col>
                    <form action="">
                        <label htmlFor="content"></label>
                        <textarea name="content" id="" cols="30" rows="10"></textarea>
                    </form>
                </Col>
            </Row>
        </section>
    )
}

export default Contact
