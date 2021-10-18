import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    const hanleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                history.push(redirect_uri);
            })
    }
    return (
        <div>
            <h2>please login</h2>
            <Button onClick={hanleGoogleSignIn} className="btn-grad">Google Sign In</Button>
        </div>
    );
};

export default Login;