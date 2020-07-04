import React from 'react'
import './Projects.scss'
import { Row, Card } from 'react-bootstrap'
import pbProtfolioPhoto from '../../img/pb-portfolio.png'
import gameupPhoto from '../../img/gameup.png'
import ekrukPhoto from '../../img/ekruk.png'
import SectionHeading from '../SectionHeading'

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <SectionHeading text="PROJECTS" />
            <Row>
                <Card className="text-white projects__card img-hover">
                    <Card.Img src={pbProtfolioPhoto} alt="Piotr Bilik's portfolio website" />
                    <Card.ImgOverlay className="d-flex flex-column justify-content-around">
                        <h4>PIOTR BILIK'S PORTFOLIO<br/>WEBSITE</h4>
                        <button className="projects__btn">LEARN MORE</button>
                    </Card.ImgOverlay>
                </Card>
                <Card className="text-white projects__card img-hover">
                    <Card.Img src={gameupPhoto} alt="GameUp NGO website" />
                    <Card.ImgOverlay className="d-flex flex-column justify-content-around">
                        <h4>GAMEUP NGO<br/>WEBSITE</h4>
                        <button className="projects__btn">LEARN MORE</button>
                    </Card.ImgOverlay>
                </Card>
                <Card className="text-white projects__card img-hover">
                    <Card.Img src={ekrukPhoto} alt="e-Kruk website" />
                    <Card.ImgOverlay className="d-flex flex-column justify-content-around">
                        <h4>E-KRUK<br/>SYSTEM</h4>
                        <button className="projects__btn">LEARN MORE</button>
                    </Card.ImgOverlay>
                </Card>
            </Row>
        </section>
    )
}

export default Projects
