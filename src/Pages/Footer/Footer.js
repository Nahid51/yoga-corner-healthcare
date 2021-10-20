import React from 'react';
import { Card, Container, Form, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <Card style={{ backgroundColor: "#1D2802" }} className="text-white mt-5">
                <Card.Body className='row d-flex justify-content-between align-items-center p-3'>
                    <div className="col-12 col-md-6">
                        <Card.Title className="logo fs-2">
                            Come Join with Us
                        </Card.Title>
                        <Card.Text style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "300" }}>
                            We Offer healthier lifestyle.
                            <br /><br />
                            Your Transformation is our passion and We are your personal trainers, trained nutritionist, your supplement experts, your health coach, your support group We Provide technology ut tools great explorers of the truth, the masters of human happiness need burn fat, build become your best self.
                        </Card.Text>
                        <Card.Text><small>Contact Us</small><br />
                            Phone: +88017******** <br /> Email: codder94@gmail.com
                        </Card.Text>
                    </div>
                    <div className="col-12 col-md-6">
                        <Form className="logo text-start mb-2 fs-3">Working Hour</Form>
                        <Form>
                            <Card className="login-card">
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Monday to Friday: 9am - 5pm</ListGroup.Item>
                                    <ListGroup.Item>Saturday: 9am - 1pm</ListGroup.Item>
                                    <ListGroup.Item>Friday: Closed</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Form>
                        <Container className="mt-5">
                            <Link to="logo" className="far fa-envelope fa-lg"></Link>
                            <Link to="logo" className="fab fa-facebook-square fa-lg mx-5"></Link>
                            <Link to="logo" className="fab fa-whatsapp fa-lg"></Link>
                            <Link to="logo" className="fab fa-twitter fa-lg mx-5"></Link>
                            <Link to="logo" className="fab fa-youtube fa-lg"></Link>
                        </Container>

                    </div>
                </Card.Body>
                <small className="text-center">&copy;2021 by Yoya Corner. Proudly created by myself.</small>
            </Card>
        </>
    );
};

export default Footer;