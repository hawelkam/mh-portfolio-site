import React from 'react'
import { Card } from 'react-bootstrap'

const ProjectCard = ({ img, alt, description, siteUrl }) => {
    return (
        <Card className="text-white projects__card img-hover">
            <Card.Img src={img} alt={alt} />
            <Card.ImgOverlay className="d-flex flex-column justify-content-around">
                <h4>{description}</h4>
                <a href={siteUrl}><button className="projects__btn">VISIT PAGE</button></a>
            </Card.ImgOverlay>
        </Card>
    )
}

export default ProjectCard
