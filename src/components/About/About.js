import React from 'react'
import './About.scss'
import { Row, Col } from 'react-bootstrap'
import SectionHeading from '../SectionHeading'
import { Fade } from 'react-reveal'

const About = () => {
    return (
        <section className="about js--about" id="about">
            <SectionHeading text="ABOUT ME" />
            <Row>
                <Col className="about__long-copy text-center">
                    <Fade bottom cascade>
                        <p>My name is Michał Hawełka. I'm a frontend developer, video editor and video games journalist. My main professional focus is on the frontend position, but those other fields are equally important for me (even though I'm working in them only 'after hours'). 
                        </p>
                        <p>I began my professional career in IT as a backend C++ developer, but over the years I was going closer and closer to frontend. My last job was as a Full Stack Developer using Java and Kotlin on the backend and AngularJS / Angular in the frontend. Additionally in my free time I actively expand my knowledge of HTML & CSS and learn React.</p>
                        <p>I believe my current level of expertise allows me to work as a frontend developer, but of course, I'm keen to learn and deepen my knowledge of frontend frameworks.</p>
                    </Fade>
                </Col>
            </Row>
        </section>
    )
}

export default About

// about__long-copy text-center
