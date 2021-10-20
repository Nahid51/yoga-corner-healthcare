import React from 'react';
import { Button, Card, Col, Form, Navbar, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import "./Register.css"

const Register = () => {
    const { emailPasswordRegistration, googleSignIn, handleEmailChange, handlePasswordChange, error, toogleLogin, isLogin, resetPassword, handleNameChange } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="container">
            <Card className="mx-auto my-5 login-card">
                <Card.Body>
                    <Card.Title className="mb-3">Please {isLogin ? "Login" : "Register"}</Card.Title>
                    <Form onSubmit={emailPasswordRegistration}>

                        {!isLogin && <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                            <Form.Label>Name</Form.Label>
                            <Col sm={10}>
                                <Form.Control onBlur={handleNameChange} type="Name" placeholder="Your Name" required />
                            </Col>
                        </Form.Group>}

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" required />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                            </Col>
                        </Form.Group>

                        <Navbar.Text className="text-danger">{error}</Navbar.Text>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button className="btn-grad" type="submit">{isLogin ? "Login" : "Register"}</Button>
                                <Button onClick={resetPassword} className="btn-grad">Password Reset Button</Button>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="ms-1">
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Navbar.Text >Another Login option:</Navbar.Text>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button onClick={handleGoogleSignIn} className="btn-grad">Google Sign In</Button>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} onChange={toogleLogin} className="mb-3" controlId="formHorizontalCheck">
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Form.Check label="Already Register?" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>


        </div>
    );
};

export default Register;