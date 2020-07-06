import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import ExperienceTabSectionHeader from './ExperienceTabSectionHeader'

export default class ExperienceTabSection extends Component {
    createList = (isOdd, data) => (
        <ul className="text-left">
            {data.filter((element, index) => 
                index % 2 === isOdd 
            ).map(element => (
                <li key={element}>{element}</li>
            ))}
        </ul>
    )

    render() {
        const { title, icon, data } = this.props
        return (
            <Row className="experience-tab__direction">
                <Col>
                    <ExperienceTabSectionHeader title={title} icon={icon} />
                </Col>
                <Col>
                    {this.createList(0, data)}
                </Col>
                <Col>
                    {this.createList(1, data)}
                </Col>
            </Row>
        )
    }
}
