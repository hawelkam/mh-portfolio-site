import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ExperienceHistoryItem = ({data}) => {
    return (
        <Row className="experience__row">
            <Col>
                <img src={data.companyLogo} alt="Company Logo" className="experience__company-logo"/>
                <h3>{data.position}</h3>
                <h4>{data.workPeriod}</h4>
            </Col>
            <Col>
                <ul className="responsibilities-list"><h5 style={{ textAlign: "left"}}>Responsibilities:</h5>
                    {data.responsibilities.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                <hr/>
                <ul><h5 style={{ textAlign: "left"}}>Key skills:</h5>
                    {data.keyTech.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </Col>
        </Row>
    )
}

export default ExperienceHistoryItem
