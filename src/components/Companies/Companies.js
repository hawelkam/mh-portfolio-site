import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Companies.scss'

const Companies = () => {
    return (
        <section className="companies" id="companies">
            <Row>
                <Col className="text-center">
                    <h2>COMPANIES I WORKED WITH</h2>
                </Col>
            </Row>
            <Row>
                <ul>
                    <li>NOKIA</li>
                    <li>Capgemini</li>
                    <li>KRUK S.A.</li>
                    <li>JaRock.pl</li>
                    <li>GameUp</li>
                    <li>Otwarte Klatki</li>
                    <li>Radio LUZ</li>
                </ul>
            </Row>
        </section>
    )
}

export default Companies
