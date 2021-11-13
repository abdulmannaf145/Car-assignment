import React from 'react';
import Services from '../Services/Services';
import ShowReview from '../ShowReview/ShowReview';
import Subscribe from '../Subscribe/Subscribe';
import './Home.css'

const Home = () => {
    return (
        <>
        <div className="background_img">
            <div className="container">
                    <div className="row row-cols-lg-2 row-cols-md-1 row-cols-1 g-3">
                <div className="col text-muted">
                    <h1>Welcome to <br />Vehica Car <br /> Dealer</h1>
                    <button className="btn btn-primary">View Inventory</button>
                </div>
                <div className="col">
                    <div className="hero-card">
                        <h1>Take Best Car <br />
                            From Carify</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iure, nam ipsam assumenda nemo iusto?</p>
                        <button className="btn btn-primary">Log In</button>
                        <button className=" ms-2 btn btn-primary">Add Car</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <Services/>
            <ShowReview/>
            <Subscribe/>
        </>
            );
};

export default Home;