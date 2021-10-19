import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="my-5">
            <Card className='mx-auto' style={{ width: '50rem' }}>
                <Card.Body>
                    <Card.Title className='fs-1'>Get in Touch</Card.Title>
                    <Card.Text>Jigatola, Dhanmondi, Dhaka, Bangladesh</Card.Text>
                    <Card.Text>codder94@gmail.com</Card.Text>
                    <Card.Text>+88017********/ +88018********/ +88015********</Card.Text>
                    <Link to='/join'><Button variant="primary">Join</Button></Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Contact;