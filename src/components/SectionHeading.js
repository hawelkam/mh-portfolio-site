import React from 'react'
import { Row, Col } from 'react-bootstrap'

const SectionHeading = ({text}) => {
    return (
        <Row>
            <Col className="text-center">
                <h2 className="section-heading">{text}</h2>
            </Col>
        </Row>
    )
}

export default SectionHeading
