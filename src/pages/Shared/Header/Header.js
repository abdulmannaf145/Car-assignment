import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
        const { user, logout } = useAuth();

    return (
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <Link style={{textDecoration:'none',color:'black'}} to="/home">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item mx-1">
                    <Link style={{textDecoration:'none',color:'black'}} to="/">Home</Link>
                    </li>
                    <li class="nav-item mx-1">
                    <Link style={{textDecoration:'none',color:'black'}} to="/allService">All Car</Link>
                    </li>
                        {user?.email ?
                            
                            <div className="d-flex px-2">
                                <li class="nav-item mx-1">
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/dashBoard">DashBoard</Link>
                                </li>
                                <Button variant="contained" onClick={logout}>logout</Button>
                            </div>:
                            <li class="nav-item">
                            <Link style={{textDecoration:'none',color:'black'}} to="/login">Login</Link>
                            </li>}
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;