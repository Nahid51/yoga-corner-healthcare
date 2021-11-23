import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Nature.css'

const Nature = () => {
    return (
        <div>
            <Card className="bg-dark text-white mb-5 border-0">
                <Card.Img className="bg-img" src="https://i.ibb.co/Hrsw05b/slogan-bg.jpg" alt="Card image" />
                <Card.ImgOverlay className="text-center">
                    <Card.Title style={{ color: "#2ACB35" }} className="logo fs-2">A Natural way of improving your health.</Card.Title>
                    <Card.Text style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "300" }} className="mb-5">
                        Yoga Corner look at exercise, eating, wellness and food not just as calories and weight <br /> loss, but also emotional, mental and physical.
                    </Card.Text>
                    <Card.Text>Feel a better life</Card.Text>
                    <Button as={Link} to="/error" className="btn btn-warning">Make an Appoimment</Button>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Nature;