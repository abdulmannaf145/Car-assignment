import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllServices = () => {
    const [allService, setAllService] = useState([]);
    useEffect(() => {
        fetch('https://arcane-plains-61591.herokuapp.com/allProduct')
            .then(res => res.json())
        .then(data => setAllService(data))
    },[])
    return (
        <div className="container">
             <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    allService.map(service =><div class="col">
                        <div class="card h-100">
                        <img src={service.img} class="card-img-top h-100 img-fluid" alt="car pic"/>
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
        </div>
    );
};

export default AllServices;