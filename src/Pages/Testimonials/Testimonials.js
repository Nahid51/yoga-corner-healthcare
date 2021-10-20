import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Testimonials = () => {
    return (
        <div className="container">
            <Card.Text style={{ color: "#2ACB35" }} className="logo fs-2">Testimonials</Card.Text>
            <Card.Text style={{ fontFamily: "'Poppins', sans-serif" }} className="fs-1 fw-bold mb-3">SUCCESSFUL STORIES</Card.Text>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card className="text-center">
                        <Card.Img variant="top" className="w-50 mx-auto" src="https://i.ibb.co/6ymkhFW/teacher-3.png" />
                        <Card.Body>
                            <Card.Title>Lost 80 Pounds and 4 Sizes</Card.Title>
                            <Card.Text>
                                Ladies, meet your new hero. Men, prepare to be humbled. My friend Staci, or Spezzy as she’s known yoga Coach.
                            </Card.Text>
                            <Card.Title>Steve Bairstow</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center" v>
                        <Card.Img className="w-50 mx-auto" variant="top" src="https://i.ibb.co/vHSmbcj/teacher-4.png" />
                        <Card.Body>
                            <Card.Title>Lost 146 Pounds and 5 Sizes</Card.Title>
                            <Card.Text>
                                In 10 months of following yoga Coach, Joe has lost 128 pounds. If you are overweight, out of shape, and worried that.
                            </Card.Text>
                            <Card.Title>Don Fletcher</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center">
                        <Card.Img className="w-50 mx-auto" variant="top" src="https://i.ibb.co/QM5hhS7/player-4.png" />
                        <Card.Body>
                            <Card.Title>Got Herself into the Shape</Card.Title>
                            <Card.Text>
                                When it comes to weight loss, exercise is your best friend. If you haven’t exercised for a long time and are very out.
                            </Card.Text>
                            <Card.Title>Jessica Jung</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Testimonials;