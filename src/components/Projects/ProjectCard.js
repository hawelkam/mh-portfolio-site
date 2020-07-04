import React from 'react'
import { Card } from 'react-bootstrap'

const ProjectCard = ({ img, alt, description }) => {
    return (
        <Card className="text-white projects__card img-hover">
            <Card.Img src={img} alt={alt} />
            <Card.ImgOverlay className="d-flex flex-column justify-content-around">
                <h4>{description}</h4>
                <button className="projects__btn">LEARN MORE</button>
            </Card.ImgOverlay>
        </Card>
    )
}

export default ProjectCard
