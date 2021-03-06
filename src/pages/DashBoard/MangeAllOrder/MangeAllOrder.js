import React, { useEffect, useState } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const MangeAllOrder = () => {
    const [userOrders, setUserOrders] = useState([]);
  useEffect(() => {
    fetch("https://arcane-plains-61591.herokuapp.com/bookedCar")
      .then((res) => res.json())
      .then((data) => setUserOrders(data));
  }, []);
  const handleDeleteUserService = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
      console.log(id);
    if (proceed) {
      const url = `https://arcane-plains-61591.herokuapp.com/bookedCar/${id}`;
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

  const handleUpdateUser = (id) => {
    const url = `https://arcane-plains-61591.herokuapp.com/usersOrder/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successful");
        }
        console.log(data);
        fetch("https://arcane-plains-61591.herokuapp.com/bookedCar")
          .then((res) => res.json())
          .then((data) => setUserOrders(data));
      });
  };
      return (
        <>
            <TableContainer style={{width:'100%'}} component={Paper}>
            <Table
              aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Order Name</TableCell>
                        <TableCell align="right">Order Price</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {userOrders.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.email}
                        </TableCell>
                        <TableCell align="right">{row.clientName}</TableCell>
                        <TableCell align="right">{row.serviceName}</TableCell>
                        <TableCell align="right">${row.servicePrice}</TableCell>
                        <TableCell align="right">
                          {(row.condition==="shipped")?<Button
                            variant="contained"
                            sx={{mx:2}}
                            // className="btn btn-primary me-3"
                          >Shipped</Button>
                            : <Button
                              variant="contained"
                              onClick={()=> handleUpdateUser(row._id)}
                            className="btn-Car me-3"
                          >Pending</Button>}
                          <Button
                            variant="contained"
                            // className="btn btn-primary"
                            onClick={()=>handleDeleteUserService(row._id)}
                            >
                                <i class="fas fa-times"></i>
                            </Button>    
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
        </TableContainer>
        </>
    );
};

export default MangeAllOrder;