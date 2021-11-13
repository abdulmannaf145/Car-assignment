import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://arcane-plains-61591.herokuapp.com/allProduct')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const sixServices = services.slice(0, 6);
    return (
        <div className="container py-4">
            <h2>Our best Cars</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    sixServices.map(service =><div class="col">
                        <div class="card h-100">
                        <img src={service.img} class="card-img-top img-fluid h-100 w-100" alt="car pic"/>
                        <div class="card-body text-start" style={{background:'#222732',color:'white'}}>
                            <h5 class="card-title">{service.name}</h5>
                            <h5 class="card-text fw-bloder">${service.price}</h5>
                            <ul className="list-unstyled d-flex justify-content-between ">
                                <li style={{background:'#FF591E',padding:'3px 5px',borderRadius:'5px'}}>{service.year}</li>    
                                <li className='text-muted'>{service.mileage}</li>    
                                <li className='text-muted'>{service.fuelType}</li>    
                                </ul>
                                <div className="d-flex justify-content-between">
                                    <Link to={`/service/${service._id}`}>
                                        <button className="btn" style={{background:'#FF591E',color:'white',padding:'3px 5px',borderRadius:'5px'}}>Show details</button>
                                    </Link>
                                    <button  className="btn" style={{background:'#FF591E',color:'white',padding:'3px 5px',borderRadius:'5px'}}>like</button>
                                </div>
                        </div>
                        </div>
                    </div>)
                }
            </div>
            <Link to="/allService">
                <button className="btn my-3" style={{background:'#FF591E',color:'white',padding:'3px 5px',borderRadius:'5px'}}>all cars</button>
            </Link>
        </div>
    );
};

export default Services;