import React from 'react';
import '../../../index.css'
import { Button, Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/kJPnkx8/banner11.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>We are SageMood Health Care Group</h2>
                        <h1>Provide Professional Health Conscious Instruction</h1>
                        <p>Our Health Instractor provides world-class health, Yoga, fitness and nutrition certification program to world class professionals.</p>
                        <Button variant="warning">Know More</Button>{' '}
                        <Button variant="warning">Contact Us</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/2n6YvSS/banner12.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2>We have 10 years of experience with</h2>
                        <h1>Certified Personal Trainers</h1>
                        <p>Our Health Instractor provides world-class health, Yoga, fitness and nutrition certification program to world class professionals.</p>
                        <Button variant="warning">Our Company</Button>{' '}
                        <Button variant="warning">Contact Us</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/4t8QLrR/banner13.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2>Be Healthy and Be Happy</h2>
                        <h1>We support to find a healthy life</h1>
                        <p>Our Health Instractor provides world-class health, Yoga, fitness and nutrition certification program to world class professionals.</p>
                        <Button variant="warning">Our Company</Button>{' '}
                        <Button variant="warning">Contact Us</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;