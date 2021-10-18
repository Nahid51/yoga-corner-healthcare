import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
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
                        <Form className="logo text-start mb-2 fs-3">Give Us Your FeedBack</Form>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your Comment</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Link to='/footer'><Button variant="warning" type="submit">
                                Submit
                            </Button></Link>
                        </Form>
                    </div>
                </Card.Body>
                <small className="text-center">&copy;2021 by Yoya Corner. Proudly created by myself.</small>
            </Card>
        </>
    );
};

export default Footer;