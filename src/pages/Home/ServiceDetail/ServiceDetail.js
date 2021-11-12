import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const ServiceDetail = () => {
    const { id } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/allProduct`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    
    const ExactItem = service.filter((td) => td._id === id);

    const { user } = useAuth();
    const initialInfo = { clientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        // collect data
        const bookingCar = {
            ...bookingInfo,
            serviceName: ExactItem[0]?.name,
            servicePrice: ExactItem[0]?.price,
        }
        // send to the server
        fetch('http://localhost:5000/bookedCar', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingCar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('booking successfuly')
                }
            });

        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="row g-3">
                <div className="col-lg-7 col-12 text-start">
                    <img className="img-fluid rounded w-100" src={ExactItem[0]?.img} alt="" />
                    <p>{ExactItem[0]?.description }</p>
                </div>
                <div className="col-lg-5 col-12 text-start">
                    <h2>{ExactItem[0]?.name}</h2>
                    <ul className="d-flex justify-content-around border-bottom border-3 pb-3">
                        <li>{ExactItem[0]?.year}</li>
                        <li>{ExactItem[0]?.mileage}</li>
                        <li>{ExactItem[0]?.fuelType}</li>
                    </ul>
                    <h2 className="text-orange">${ExactItem[0]?.price}</h2>
                    <div className="p-4 rounded" style={{background:'#F2F5FB'}}>
                        <div className="d-flex justify-content-between">
                            <h5>Drive Type</h5>
                            <p>{ExactItem[0]?.driveType}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5>Model</h5>
                            <p>{ExactItem[0]?.model}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5>Color</h5>
                            <p>{ExactItem[0]?.color}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5>Make</h5>
                            <p>{ExactItem[0]?.make}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5>Condition</h5>
                            <p>{ExactItem[0]?.condition}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5>Year</h5>
                            <p>{ExactItem[0]?.year}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5>Fuel Type:</h5>
                            <p>{ExactItem[0]?.fuelType}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5>Engine Size:</h5>
                            <p>{ExactItem[0]?.engineSize}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5>Doors:</h5>
                            <p>{ExactItem[0]?.doors}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5>Cylinders:</h5>
                            <p>{ExactItem[0]?.cylinder}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5>VIN:</h5>
                            <p>{ExactItem[0]?.vin}</p>
                        </div>

                    </div>
                </div>
            </div>
            <Box className="my-2">
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Booking Now
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            placeholder={ExactItem[0]?.name}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="patientName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue="Phone Number"
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            placeholder=  {'$'+ExactItem[0]?.price}
                            size="small"
                        /> <br />
                        <Button type="submit" variant="contained">Booked</Button>
                    </form>
                </Box>
        </div>
    );
};

export default ServiceDetail;