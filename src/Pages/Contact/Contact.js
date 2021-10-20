import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'animate.css';

const Contact = () => {
    return (
        <div className="my-5">
            <Card className='mx-auto login-card'>
                <Card.Body className="mx-auto">
                    <Card.Title className='fs-1 text-center'>Get in Touch</Card.Title>
                    <Card.Text>Jigatola, Dhanmondi, Dhaka, Bangladesh</Card.Text>
                    <Card.Text>codder94@gmail.com</Card.Text>
                    <Card.Text>+88017********/ +88018********/ +88015********</Card.Text>
                    <Container className="my-3">
                        <Link to="logo" className="far fa-envelope fa-lg"></Link>
                        <Link to="logo" className="fab fa-facebook-square fa-lg mx-5"></Link>
                        <Link to="logo" className="fab fa-whatsapp fa-lg"></Link>
                        <Link to="logo" className="fab fa-twitter fa-lg mx-5"></Link>
                        <Link to="logo" className="fab fa-youtube fa-lg"></Link>
                    </Container>
                    <Button as={Link} to='/join' className="btn-grad animate__animated animate__backInUp">Join</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Contact;