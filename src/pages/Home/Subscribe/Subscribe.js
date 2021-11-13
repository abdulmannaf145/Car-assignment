import React from 'react';
import logo from '../../../images/josh-berquist-_4sWbzH5fp8-unsplash-removebg-preview.png'

const Subscribe = () => {
    return (
        <div style={{background:'#FF3124'}}>
            <div className="container py-4">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
                    <div className="col text-start text-white d-flex flex-column justify-content-center">
                        <p className="fw-bolder">Newsletter</p>
                        <h2>Subscribe To Our Newsletter<br /> For New Updates</h2>
                        <input type="week" name="" id="" />
                    </div>
                    <div className="col">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;