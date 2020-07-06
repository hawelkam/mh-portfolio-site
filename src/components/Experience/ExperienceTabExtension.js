import React, { Component } from 'react'
import { Row, Accordion, Card, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopHouse, faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import ExperienceTabSectionHeader from './ExperienceTabSectionHeader'
import ExperienceHistoryItem from './ExperienceHistoryItem'

export default class ExperienceTabExtension extends Component {
    state = {
        expanded: false
    }

    toggleExperience = () => {
        this.setState(() => ({
            expanded: !this.state.expanded
        }))
    }

    render() {
        const { experience } = this.props;
        return (
            <Row className="justify-content-center">
                <Accordion style={{width: "90%"}}>
                    <Card className="border-0">
                        <Card.Header className="border-0 bg-white">
                            <Accordion.Toggle className="skills__btn" as={Button} variant="link" eventKey="0" onClick={this.toggleExperience}>
                                {this.state.expanded ? <FontAwesomeIcon icon={faArrowAltCircleUp} /> : <FontAwesomeIcon icon={faArrowAltCircleDown} />}&nbsp;&nbsp;RELEVANT EXPERIENCE
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Row>
                                    <Col lg={3} className="work-history__header">
                                        <ExperienceTabSectionHeader title="WORK HISTORY" icon={faLaptopHouse} />
                                    </Col>
                                    <Col>
                                        {experience.map((historyItem, index) => (
                                            <React.Fragment key={historyItem.companyName}>
                                                <ExperienceHistoryItem data={historyItem} />
                                                {experience.length !== (index + 1) && <hr/>}
                                            </React.Fragment>
                                        ))}
                                    </Col>
                                </Row>
                                </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Row>
        )
    }
}