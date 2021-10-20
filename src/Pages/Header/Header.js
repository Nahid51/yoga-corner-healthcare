import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'animate.css';
import './Header.css';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <Navbar bg="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="logo lh-1 fw-bold animate__animated animate__flip">Yoga Corner <br /><small className="fs-6">For Healthy Life</small></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 ms-3 fw-bolder"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
                        </Nav>
                        <Navbar.Text className="me-3">
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                        {user?.email ?
                            <Button onClick={logOut} className="btn-grad">log Out</Button> :
                            <Button as={Link} to="/login" className="btn-grad">Login</Button>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;