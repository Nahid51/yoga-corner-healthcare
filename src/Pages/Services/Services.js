import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div style={{ backgroundColor: "#F7F7F7" }} className="text-center py-5">
            <h2 style={{ color: "#2ACB35" }} className="logo">What We Do?</h2>
            <h1 style={{ fontFamily: "'Poppins', sans-serif" }} className="fw-bold mb-3">Our Services</h1>
            <Row xs={1} md={2} lg={4} className="g-4">
                {services.map((service) => (
                    <Service
                        key={service.id}
                        service={service}
                    ></Service>
                ))}
            </Row>
        </div>
    );
};

export default Services;