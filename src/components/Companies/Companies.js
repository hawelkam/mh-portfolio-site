import React from 'react'
import { Row } from 'react-bootstrap'
import './Companies.scss'
import SectionHeading from '../SectionHeading'
import nokiaLogo from '../../img/logos/nokia-logo.png'
import capgeminiLogo from '../../img/logos/capgemini-logo.png'
import krukLogo from '../../img/logos/logo-kruk.png'
import okLogo from '../../img/logos/ok-logo.png'
import animaLogo from '../../img/logos/anima-logo.png'
import gameupLogo from '../../img/logos/gameup-logo.png'
import jarockLogo from '../../img/logos/jarock-logo.png'
import luzLogo from '../../img/logos/luz-logo.png'
import { Fade } from 'react-reveal'

const Companies = () => {
    return (
        <section className="companies" id="companies">
            <SectionHeading text="COMPANIES I WORKED WITH" />
            <Row className="flex-column align-items-center">
                <Fade bottom cascade>
                    <ul className="d-flex company-list">
                        <li><img src={nokiaLogo} alt="Nokia logo"/></li>
                        <li><img src={capgeminiLogo} alt="Capgemini logo"/></li>
                        <li><img src={krukLogo} alt="Kruk logo"/></li>
                    </ul>
                    <ul className="d-flex company-list">
                        <li><img src={okLogo} alt="Otwarte Klatki logo"/></li>
                        <li><img src={animaLogo} alt="Anima International logo"/></li>
                        <li><img src={gameupLogo} alt="Nokia logo"/></li>
                        <li><img src={jarockLogo} alt="Nokia logo"/></li>
                        <li><img src={luzLogo} alt="Nokia logo"/></li>
                    </ul>
                </Fade>
            </Row>
        </section>
    )
}

export default Companies
