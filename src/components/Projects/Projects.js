import React from 'react'
import './Projects.scss'
import { Row } from 'react-bootstrap'
import pbProtfolioPhoto from '../../img/pb-portfolio.png'
import gameupPhoto from '../../img/gameup.png'
import ekrukPhoto from '../../img/ekruk.png'
import SectionHeading from '../SectionHeading'
import ProjectCard from './ProjectCard'
import { Fade } from 'react-reveal'

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <SectionHeading text="PROJECTS" />
            <Fade bottom cascade>
                <Row className="projects__cards">
                    <ProjectCard img={ekrukPhoto} alt="e-Kruk website" description="Various front- and backend features for the eKruk web app" siteUrl="https://system.e-kruk.pl"/>
                    <ProjectCard img={gameupPhoto} alt="GameUp NGO website" description="GameUp NGO full Wordpress website config" siteUrl="https://gameup.org.pl"/>
                    <ProjectCard img={pbProtfolioPhoto} alt="Piotr Bilik's portfolio website" description="Portfolio website for a&nbsp;Junior UX&nbsp;Designer" siteUrl="https://piotrbilik.com"/>
                    {/* <ProjectCard img={ekrukPhoto} alt="e-Kruk website" description="eNovum" />
                    <ProjectCard img={gameupPhoto} alt="GameUp NGO website" description="GZW-Landing" />
                    <ProjectCard img={pbProtfolioPhoto} alt="Piotr Bilik's portfolio website" description="Adam Flamma" /> */}
                </Row>
            </Fade>
        </section>
    )
}

export default Projects
