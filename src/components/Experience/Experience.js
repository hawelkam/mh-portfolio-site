import React from 'react'
import { Row, Nav, Tab } from 'react-bootstrap'
import './Experience.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faVideo, faGamepad } from '@fortawesome/free-solid-svg-icons'
import SectionHeading from '../SectionHeading'
import ExperienceTab from './ExperienceTab'
import nokiaLogo from '../../img/logos/nokia-logo.png'
import krukLogo from '../../img/logos/logo-kruk.png'
import capLogo from '../../img/logos/capgemini-logo.png'
import gameupLogo from '../../img/logos/gameup-logo.png'


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
        experience: [
            {
                companyLogo: nokiaLogo,
                companyName: "Nokia",
                position: "Software Engineer",
                workPeriod: "May 2013 - June 2016",
                responsibilities: [
                    "C++ programming for BTS",
                    "writing unit, module and SCT tests",
                    "designing new features"
                ],
                keyTech: [
                    "C++",
                    "TTCN-3",
                    "Python",
                    "Bash",
                    "Git"
                ]
            }
        ]
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
        experience: [
            {
                companyLogo: krukLogo,
                companyName: "Kruk",
                position: "Full-stack developer",
                workPeriod: "June 2019 - current",
                responsibilities: [
                    "Design and implementation of backend features for e-Kruk platform",
                    "Design and implementation of frontend features for e-Kruk platform",
                    "Design and implementation of backend features for e-Novum platform",
                    "Design and implementation of frontend features for e-Novum platform",
                    "Implementation of new tools for optimizing team's workflow"
                ],
                keyTech: [
                    "Java",
                    "Kotlin",
                    "AngularJS",
                    "Angular",
                    "Git",
                    "Docker",
                    "HTML5",
                    "CSS/LESS"
                ]
            },
            {
                companyLogo: gameupLogo,
                companyName: "GameUp",
                position: "IT Specialist / Web Developer",
                workPeriod: "January 2020 - current",
                responsibilities: [
                    "Design and implementation of backend features for e-Kruk platform",
                    "Design and implementation of frontend features for e-Kruk platform",
                    "Design and implementation of backend features for e-Novum platform",
                    "Design and implementation of frontend features for e-Novum platform",
                    "Implementation of new tools for optimizing team's workflow"
                ],
                keyTech: [
                    "Wordpress",
                    "HTML5",
                    "CSS/LESS"
                ]
            },
            {
                companyLogo: capLogo,
                companyName: "Capgemini",
                position: "Java Developer",
                workPeriod: "August 2017 - May 2019",
                responsibilities: [
                    "Design and implementation of backend features for e-Kruk platform",
                    "Design and implementation of frontend features for e-Kruk platform",
                    "Design and implementation of backend features for e-Novum platform",
                    "Design and implementation of frontend features for e-Novum platform",
                    "Implementation of new tools for optimizing team's workflow"
                ],
                keyTech: [
                    "Java",
                    "Git",
                    "Swing"
                ]
            },
            {
                companyLogo: nokiaLogo,
                companyName: "Nokia",
                position: "Software Engineer",
                workPeriod: "May 2013 - June 2016",
                responsibilities: [
                    "C++ programming for BTS",
                    "writing unit, module and SCT tests",
                    "designing new features"
                ],
                keyTech: [
                    "C++",
                    "TTCN-3",
                    "Python",
                    "Bash",
                    "Git"
                ]
            }
        ]
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
        experience: [
            {
                companyLogo: nokiaLogo,
                companyName: "Nokia",
                position: "Software Engineer",
                workPeriod: "May 2013 - June 2016",
                responsibilities: [
                    "C++ programming for BTS",
                    "writing unit, module and SCT tests",
                    "designing new features"
                ],
                keyTech: [
                    "C++",
                    "TTCN-3",
                    "Python",
                    "Bash",
                    "Git"
                ]
            }
        ]
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
                        {Object.values(skillsTabData).map(tab => (
                            <ExperienceTab key={tab.key} data={tab} />
                        ))}
                    </Tab.Content>
                </Row>
            </Tab.Container>
        </section>
    )
}

export default Experience
