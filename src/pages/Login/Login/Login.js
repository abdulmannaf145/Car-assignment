import { Alert, Button, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import {  NavLink ,useHistory,useLocation} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();
    const { user, loginUser, isLoading, authError } = useAuth();
    
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);   
        e.preventDefault();
    }
    return (
        <div className="container">
            <div className="form">
                 <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button><br />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                <NavLink
                    style={{ textDecoration: 'none' }}
                    to="/register">
                            <Button variant="text">Create an Account </Button>
                </NavLink>
            </div>
        </div>
    );
};

export default Login;