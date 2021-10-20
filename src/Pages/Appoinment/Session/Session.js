import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import 'animate.css';

const Session = () => {
    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState([]);

    // data loaded
    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, []);

    // data loaded after calling and set depandency
    useEffect(() => {
        const foundCourse = serviceDetails.find(service => service.id === serviceId);
        setSingleService(foundCourse);
    }, [serviceDetails, serviceId]);
    return (
        <div>
            <div className='my-5'>
                <Card className='mx-auto login-card'>
                    <Card.Img className="animate__animated animate__backInRight" variant="top" src={singleService?.img} />
                    <Card.Body>
                        <Card.Title>Category: {singleService?.category}</Card.Title>
                        <Card.Text style={{ textAlign: 'justify' }}><b>About:</b> {singleService?.about}</Card.Text>
                        <Button as={Link} to='/services' className="btn-grad mx-5 animate__animated animate__backInUp">Back</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Session;