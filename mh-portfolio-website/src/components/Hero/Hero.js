import React from 'react'
import './Hero.scss'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import heroPhoto from '../../img/michalhawelka.png'

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <Row className="hero__introduction">
                <Col className="d-flex justify-content-center align-items-center text-center">
                    <img className="hero__photo" src={heroPhoto} alt="Michał Hawełka" />
                </Col>
                <Col className="d-flex flex-column justify-content-center">
                    <h2>FRONTEND DEVELOPER</h2>
                    <FontAwesomeIcon icon={faBolt} size="2x" className="hero__lightning-icon"/>
                    <h2>VIDEO EDITOR</h2>
                    <FontAwesomeIcon icon={faBolt} size="2x" className="hero__lightning-icon"/>
                    <h2>VIDEO GAMES JOURNALIST</h2>
                </Col>
            </Row>
        </section>
    )
}

export default Hero
