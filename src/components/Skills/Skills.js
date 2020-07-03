import React from 'react'
import { Row, Col, Nav, Tab} from 'react-bootstrap'
import './Skills.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faVideo, faGamepad, faBolt, faCog, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <Row>
                <Col className="text-center">
                    <h2>SKILLS</h2>
                </Col>
            </Row>
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
                        <Tab.Pane eventKey="frontend" className="fade skills__tab">
                            <Row>
                                <Col>
                                    <h2>SKILLS</h2>
                                    <FontAwesomeIcon icon={faBolt} size="2x"/>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>JavaScript/ES6</li>
                                        <li>Angular</li>
                                        <li>Sass</li>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>React</li>
                                        <li>Bootstrap 4</li>
                                        <li>AngularJS</li>
                                        <li>REST</li>
                                        <li>BEM</li>
                                    </ul>
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col>
                                    <h2>TOOLS</h2>
                                    <FontAwesomeIcon icon={faCog} size="2x"/>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>VS Code</li>
                                        <li>Postman</li>
                                        <li>Adobe Photoshop</li>
                                        <li>npm/yarn</li>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>Git/SVN</li>
                                        <li>Webpack</li>
                                        <li>Agile/Scrum</li>
                                    </ul>
                                </Col>
                            </Row>
                            <hr/>
                            <Row className="justify-content-center">
                                <button className="skills__btn">
                                    <FontAwesomeIcon icon={faArrowAltCircleRight} />&nbsp;&nbsp;MY EXPERIENCE
                                </button>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="editor" className="fade skills__tab">
                            <Row>
                                <Col>
                                    <h2>SKILLS</h2>
                                    <FontAwesomeIcon icon={faBolt} size="2x"/>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>Filming</li>
                                        <li>Visual Storytelling</li>
                                        <li>Basic motion graphics</li>
                                        <li>Graph animations</li>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>Audio syncing</li>
                                        <li>Basic audio editing</li>
                                        <li>Dynamic editing</li>
                                    </ul>
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col>
                                    <h2>TOOLS</h2>
                                    <FontAwesomeIcon icon={faCog} size="2x"/>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>Adobe Premiere Pro</li>
                                        <li>DaVinci Resolve</li>
                                        <li>Adobe After Effects</li>
                                        <li>Adobe Photoshop</li>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>Adobe Audition</li>
                                        <li>iMovie</li>
                                    </ul>
                                </Col>
                            </Row>
                            <hr/>
                            <Row className="justify-content-center">
                                <button className="skills__btn">
                                    <FontAwesomeIcon icon={faArrowAltCircleRight} />&nbsp;&nbsp;MY EXPERIENCE
                                </button>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="journalist" className="fade skills__tab">
                            <Row>
                                <Col>
                                    <h2>SKILLS</h2>
                                    <FontAwesomeIcon icon={faBolt} size="2x"/>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>Interviews</li>
                                        <li>Voiceover</li>
                                        <li>YouTube production</li>
                                        <li>Blogging</li>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>Info researching</li>
                                        <li>Newswriting</li>
                                        <li>Industry knowledge</li>
                                    </ul>
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col>
                                    <h2>TOOLS</h2>
                                    <FontAwesomeIcon icon={faCog} size="2x"/>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>Adobe Audition</li>
                                        <li>Wordpress</li>
                                        <li>Adobe Premiere Pro</li>
                                        <li>DaVinci Resolve</li>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>Facebook</li>
                                        <li>Twitter</li>
                                        <li>MS Office</li>
                                        <li>SEO</li>
                                    </ul>
                                </Col>
                            </Row>
                            <hr/>
                            <Row className="justify-content-center">
                                <button className="skills__btn">
                                    <FontAwesomeIcon icon={faArrowAltCircleRight} />&nbsp;&nbsp;MY EXPERIENCE
                                </button>
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Row>
            </Tab.Container>
        </section>
    )
}

export default Skills
