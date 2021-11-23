import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'animate.css';

const About = () => {
    return (
        <div className="my-5">
            <Row className="g-2">
                <Col className="login-card col-lg-8 col-md-8 col-12">
                    <Card className="border-0">
                        <Card.Body className="text-lg-end text-md-center text-start">
                            <Card.Title style={{ color: "#2ACB35" }} className="logo fs-2">Some Story About Us</Card.Title>
                            <Card.Title style={{ fontFamily: "'Poppins', sans-serif" }} className="fs-1 fw-bold mb-3">WE HAVE 10 YEARS OF EXPERINCE</Card.Title>
                            <Card.Text style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "300" }} className="mb-5">
                                We handpick the best coaches and health experts from across the country to make sure you get the mostpersonalized health care you deserve between those doctor visits.
                            </Card.Text>
                            <Row xs={1} md={2} className="g-4">
                                <Col>
                                    <Card className="border-0">
                                        <Card.Body className="text-lg-end text-md-center text-start">
                                            <Card.Title style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "600" }}>Our Mission</Card.Title>
                                            <Card.Text style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "300" }}>
                                                Explain to you how all this mistaken idea of denouncing ut pleasure work praising pain was born and will give.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="border-0">
                                        <Card.Body className="text-start">
                                            <Card.Title style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "600" }}>Our Vision</Card.Title>
                                            <Card.Text style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "300" }}>
                                                Pleasure work praising pain ut was born and will give you can complete design account sed the system.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-lg-4 col-md-4 col-12">
                    <Card className="d-flex justify-content-center align-items-center border-0">
                        <Card.Img className="w-75 animate__animated animate__backInRight" variant="left" src="https://i.ibb.co/grJtvQQ/about.png" />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default About;