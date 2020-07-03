import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Contact.scss'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <Row>
                <Col className="text-center">
                    <h2>COMPANIES I WORKED WITH</h2>
                </Col>
            </Row>
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
                        <label for="content"></label>
                        <textarea name="content" id="" cols="30" rows="10"></textarea>
                    </form>
                </Col>
            </Row>
        </section>
    )
}

export default Contact
