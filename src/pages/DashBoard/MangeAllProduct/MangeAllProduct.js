import React, { useEffect, useState } from 'react';

const MangeAllProduct = () => {
     const [allService, setAllService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allProduct')
            .then(res => res.json())
            .then(data => setAllService(data))
    }, []);
    const handleDeleteUser = (id) => {
      console.log(id)
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    if (proceed) {
      const url =  `http://localhost:5000/allProduct/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = allService.filter((user) => user._id !== id);
            setAllService(remainingUsers);
          }
        });
    }
  }

    const handleDelete = (id) => {
            handleDeleteUser(id)
            console.log(id)
        }
    
    return (
        <div className="container">
            <h2>This is mange all product</h2>
             <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    allService.map(service => <div class="col">
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
                                <div className="text-center">
                                    <button onClick={()=>handleDelete(service._id)} className="btn" style={{background:'#FF591E',color:'white',padding:'3px 5px',borderRadius:'5px'}}>Delete</button>
                                </div>
                                
                                {/* <div className="d-flex justify-content-between">
                                    <Link to={`/service/${service.id}`}>
                                        <button className="btn" style={{background:'#FF591E',color:'white',padding:'3px 5px',borderRadius:'5px'}}>Show details</button>
                                    </Link>
                                    <button  className="btn" style={{background:'#FF591E',color:'white',padding:'3px 5px',borderRadius:'5px'}}>like</button>
                                </div> */}
                        </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MangeAllProduct;