import React from 'react';
import logo from '../../../images/vehica-logo-white-retina-165x29.webp'
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <img src={logo} alt="" />
                    </div>
                    <div className="col-lg-2 text-start col-12">
                        <ul>
                            <li className="text-orange"><span className="text-white">Listings</span></li>
                            <li className="text-orange"><span className="text-white">FAQ</span></li>
                            <li className="text-orange"><span className="text-white">About us</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 text-start col-12">
                        <ul>
                            <li className="text-orange"><span className="text-white">Blog</span></li>
                            <li className="text-orange"><span className="text-white">Our team</span></li>
                            <li className="text-orange"><span className="text-white">Contact</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 text-start col-12">
                        <p>Award-winning, family owned dealership of new and pre-owned vehicles with several locations across the city. Lowest prices and the best customer service guaranteed.</p>
                    </div>
                    <div className="col-lg-3 text-end col-12">
                        <h2>(123)<span className="text-orange">456-78901</span></h2>
                        <h4>support@vehica.com</h4>
                        <h4>West 12th Street<br />
                        New York, NY, USA</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;