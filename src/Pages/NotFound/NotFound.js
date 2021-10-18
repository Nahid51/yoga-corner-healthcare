import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="mt-5 text-center">
            <Image src="https://cdn.dribbble.com/users/1190086/screenshots/7780963/media/02564c983af71888c5ba1091cb136101.gif" fluid />
            <br />
            <Link to="/"><Button className="mt-3" variant="danger">Go Back</Button>{' '}</Link>
        </div>
    );
};

export default NotFound;