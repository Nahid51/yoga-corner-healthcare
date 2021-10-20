import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'animate.css';

const Service = ({ service }) => {
    const { id, img, category, about } = service;
    return (
        <div>
            <Col className="container">
                <Card style={{ height: "45rem" }}>
                    <Card.Img className="animate__animated animate__backInRight" style={{ height: "20rem" }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title style={{ fontFamily: "'Poppins', sans-serif" }}>Category: {category}</Card.Title>
                        <Card.Text style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "300" }}>
                            <b>About:</b> {about}
                        </Card.Text>
                        <Button as={Link} to={`/service/${id}`} className="btn-grad mb-2">Session Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;