import React, { Component } from 'react'
import { Tab, Col, Row, Accordion, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCog, faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import ExperienceTabSectionHeader from './ExperienceTabSectionHeader'
import ExperienceTabSection from './ExperienceTabSection'

export class ExperienceTab extends Component {
    state = {
        expanded: false
    }

    toggleExperience = () => {
        this.setState(() => ({
            expanded: !this.state.expanded
        }))
    }

    createList = (isOdd, data) => (
        <ul>
            {data.filter((element, index) => 
                index % 2 === isOdd 
            ).map(element => (
                <li key={element}>{element}</li>
            ))}
        </ul>
    )

    render() {
        let { expanded } = this.state
        let { key, skills, tools, experience } = this.props.data
        return (
            <Tab.Pane eventKey={key} className="fade skills__tab">
                <ExperienceTabSection title="SKILLS" icon={faBolt} data={skills} />
                <hr/>
                <ExperienceTabSection title="TOOLS" icon={faCog} data={tools} />
                <hr/>
                <Row className="justify-content-center">
                    <Accordion style={{width: "90%"}}>
                        <Card className="border-0">
                            <Card.Header className="border-0 bg-white">
                                <Accordion.Toggle className="skills__btn" as={Button} variant="link" eventKey="0" onClick={this.toggleExperience}>
                                    {expanded ? <FontAwesomeIcon icon={faArrowAltCircleUp} /> : <FontAwesomeIcon icon={faArrowAltCircleDown} />}&nbsp;&nbsp;MY EXPERIENCE
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <ExperienceTabSectionHeader title="WORK HISTORY" icon={faBolt} />
                                        </Col>
                                        <Col>
                                            {experience}
                                        </Col>
                                    </Row>
                                    </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Row>
            </Tab.Pane>
        )
    }
}

export default ExperienceTab
