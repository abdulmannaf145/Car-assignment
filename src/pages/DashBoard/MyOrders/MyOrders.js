import React, { useEffect, useState } from "react";

import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import useAuth from '../../../hooks/useAuth'

const MyOrders = () => {
     const { user, token } = useAuth();
  const [userOrders, setUserOrders] = useState([]);
  useEffect(() => {
    const url = `https://arcane-plains-61591.herokuapp.com/usersOrder?email=${user.email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserOrders(data));
  }, [user.email, token]);

  const handleDeleteUserService = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    if (proceed) {
      const url = `https://arcane-plains-61591.herokuapp.com/usersOrder/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = userOrders.filter(
              (userService) => userService._id !== id
            );
            setUserOrders(remainingUsers);
          }
        });
    }
  };

    return (
         <div className="container">
      <h2>My Orders: {userOrders.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="Appointments table">
          <TableHead>
            <TableRow>
              <TableCell align="canter">Service </TableCell>
              <TableCell align="canter">Money</TableCell>
              <TableCell align="canter">Name</TableCell>
              <TableCell align="canter">My Email</TableCell>
              <TableCell align="canter">Condition</TableCell>
              <TableCell align="canter">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userOrders.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.serviceName}
                </TableCell>
                <TableCell align="canter">{row.servicePrice}</TableCell>
                <TableCell align="canter">{row.clientsName}</TableCell>
                <TableCell align="canter">{row.email}</TableCell>
                <TableCell align="canter">
                  {row.condition ? (
                    <Button
                      className="btn-Car"
                      variant="contained"
                    >
                      <i class="fas fa-check"></i>
                      {row.condition}
                    </Button>
                  ) : (
                    <Button variant="contained" className="btn-Car-outline"> pending.. </Button>
                  )}
                </TableCell>
                <TableCell align="canter">
                  <Button
                    variant="contained"
                    onClick={() => handleDeleteUserService(row._id)}
                    className="btn-Car"
                  >
                    <i class="fas fa-times"></i>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    );
};

export default MyOrders;