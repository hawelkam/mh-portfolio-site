import React from 'react'
import { Row } from 'react-bootstrap'
import './Companies.scss'
import SectionHeading from '../SectionHeading'

const Companies = () => {
    return (
        <section className="companies" id="companies">
            <SectionHeading text="COMPANIES I WORKED WITH" />
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
