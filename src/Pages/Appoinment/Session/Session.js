import React from 'react';
import { useParams } from 'react-router';

const Session = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>this is Session: {serviceId}</h2>
        </div>
    );
};

export default Session;