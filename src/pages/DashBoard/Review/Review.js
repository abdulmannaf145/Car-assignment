import { Rating, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import StarIcon from "@mui/icons-material/Star";

import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
  const initialInfo = {
    userImg:
      "https://i.ibb.co/Qf1rWhZ/114-1149878-setting-user-avatar-in-specific-size-without-breaking.png",
    role: "client",
    clientsName: user.displayName,
    email: user.email,
    address: "",
  };
  const [value, setValue] = useState(0);

  const [bookingInfo, setBookingInfo] = useState(initialInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };
  const handleBookingSubmit = (e) => {
    // collect data
    const orders = {
      ...bookingInfo,
      rating: value
    };
    // send to the server
    fetch("https://arcane-plains-61591.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          window.alert("Review SuccessFull ");
        }
      })
    document.getElementById("Form").reset();;

    e.preventDefault();
  };
    return (
         <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="shadow p-5 m-3 borderRadius-4">
            <Box sx={{}}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                sx={{ textAlign: "center" }}
              >
                My Review
              </Typography>
              <form
                id="Form"
                className="mt-4"
                sx={{ textAlign: "center" }}
                onSubmit={handleBookingSubmit}
              >
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id="outlined-size-small"
                  name="clientsName"
                  onBlur={handleOnBlur}
                  defaultValue={user.displayName}
                  size="small"
                  required
                />
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id="outlined-size-small"
                  name="email"
                  onBlur={handleOnBlur}
                  defaultValue={user.email}
                  size="small"
                  required
                />
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id="outlined-size-small"
                  name="massage"
                  onBlur={handleOnBlur}
                  placeholder="massage"
                  size="small"
                /> <br />
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id="outlined-size-small"
                  name="address"
                  onBlur={handleOnBlur}
                  placeholder="Home Address"
                  size="small"
                  /> <br />
                  <Rating
                  name="rating"
                  value={value}
                  precision={0.5}
                  onChange={(event, newValue) => {
                  setValue(newValue);
                  }}
                  emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                  />
                  <br />

                <button type="submit" className="btn-Car">
                  Submit
                </button>
              </form>
            </Box>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Review;