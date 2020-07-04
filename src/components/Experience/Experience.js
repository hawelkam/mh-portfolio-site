import React from 'react'
import { Row, Nav, Tab } from 'react-bootstrap'
import './Experience.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faVideo, faGamepad } from '@fortawesome/free-solid-svg-icons'
import SectionHeading from '../SectionHeading'
import ExperienceTab from './ExperienceTab'

const skillsTabData = {
    "journalist" : {
        key: "journalist",
        skills: [
            "Interviews",
            "Voiceover",
            "YouTube production",
            "Blogging",
            "Info researching",
            "Newswriting",
            "Industry knowledge"
        ],
        tools: [
            "Adobe Audition",
            "Wordpress",
            "Adobe Premiere Pro",
            "DaVinci Resolve",
            "Facebook",
            "Twitter",
            "Microsoft Office",
            "SEO"
        ],
        experience: "test"
    },
    "frontend" : {
        key: "frontend",
        skills: [
            "HTML5",
            "CSS3",
            "JavaScript/ES6",
            "Angular",
            "Sass",
            "React",
            "Bootstrap 4",
            "AngularJS",
            "REST",
            "BEM"
        ],
        tools: [
            "VS Code",
            "Postman",
            "Adobe Photoshop",
            "npm/yarn",
            "Git/SVN",
            "Webpack",
            "Agile/Scrum"
        ],
        experience: "test"
    },
    "editor" : {
        key: "editor",
        skills: [
            "Filming",
            "Visual Storytelling",
            "Basic motion graphics",
            "Graph animations",
            "Audio syncing",
            "Basic audio editing",
            "Dynamic editing"
        ],
        tools: [
            "Adobe Premiere Pro",
            "Adobe After Effects",
            "Adobe Photoshop",
            "DaVinci Resolve",
            "Adobe Audition",
            "iMovie"
        ],
        experience: "test"
    }
}

const Experience = () => {
    return (
        <section className="skills" id="skills">
            <SectionHeading text="SKILLS" />
            <Tab.Container id="skills_tabs" defaultActiveKey="frontend">
                <Row className="skills__cards flex-column text-center">
                    <Nav variant="pills" className="skills__nav">
                        <Nav.Item className="skills__nav--wide">
                            <Nav.Link eventKey="frontend" className="skills__nav-link">
                                <FontAwesomeIcon icon={faLaptopCode}/>
                                &nbsp;&nbsp;Frontend Developer
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="skills__nav--wide">
                            <Nav.Link eventKey="editor" className="skills__nav-link">
                                <FontAwesomeIcon icon={faVideo}/>
                                &nbsp;&nbsp;Video Editor
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="skills__nav--wide">
                            <Nav.Link eventKey="journalist" className="skills__nav-link">
                                <FontAwesomeIcon icon={faGamepad}/>
                                &nbsp;&nbsp;Video Games Journalist
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content className="skills__content">
                        <ExperienceTab data={skillsTabData.frontend} />
                        <ExperienceTab data={skillsTabData.editor} />
                        <ExperienceTab data={skillsTabData.journalist}/>
                    </Tab.Content>
                </Row>
            </Tab.Container>
        </section>
    )
}

export default Experience
