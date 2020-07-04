import React from 'react'
import './Testimonials.scss'
import SectionHeading from '../SectionHeading'
import { Carousel, Row } from 'react-bootstrap'
import michalPhoto from '../../img/michalhawelka.png'

const Testimonials = () => {
    return (
        <section className="testimonials" id="testimonials">
            <SectionHeading text="TESTIMONIALS" />
            <Row className="justify-content-center">
                <Carousel className="text-center testimonials__carousel">
                    <Carousel.Item className="testimonial">
                        <p>“I have had the pleasure of working with Generator since its inception and applying it across sales decks in three different countries and sales demographics and find it to be an invaluable tool in helping modernize and professionalize sales processes."</p>
                        <img src={michalPhoto} alt="Michal Hawelka"/>Some Guy, Some Company
                    </Carousel.Item>
                    <Carousel.Item className="testimonial">
                        <p>TEST</p>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </section>
    )
}

export default Testimonials
