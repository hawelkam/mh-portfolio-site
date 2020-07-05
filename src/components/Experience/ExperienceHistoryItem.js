import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ExperienceHistoryItem = ({data}) => {
    return (
        <Row>
            <Col>
                <img src={data.companyLogo} alt="Company Logo" className="experience__company-logo"/>
                <p>{data.position}</p>
                <p>{data.workPeriod}</p>
            </Col>
            <Col>
                <ul><h5>Responsibilities:</h5>
                    {data.responsibilities.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                <hr/>
                <ul>Key technologies:
                    {data.keyTech.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </Col>
        </Row>
    )
}

export default ExperienceHistoryItem
