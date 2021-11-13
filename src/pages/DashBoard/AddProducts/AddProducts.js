import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
    axios
      .post("https://arcane-plains-61591.herokuapp.com/allProduct", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Add Successfull");
          reset();
        }
      });
  };
    return (
        <div>
            <div className="container">
                <div className="addservice">
                    <h1 className="service-text">Add a New Service</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="add">
                    <input
                        className="mt-3 w-75"
                        {...register("img",)}
                        placeholder="Picture url please"
                    /> <br />
                    <input
                        className="mt-3 w-75"
                        {...register("name", { required: true, maxLength: 20 })}
                        placeholder="Car Name or model"
                    /> <br />
                    <input
                        className="mt-3 w-75"
                        {...register("make")}
                        placeholder="Which company made that car"
                    /> <br />
                    <input
                        className="mt-3 w-75"
                        {...register("model")}
                        placeholder="Car model "
                    /> <br />
                    <input
                        className="mt-3 w-75"
                        {...register("color")}
                        placeholder="Car color"
                    /> <br />
                    <input
                        className="mt-3 w-75"
                        {...register("driveType")}
                        placeholder="Drive type ---"
                    /> <br />
                    <input
                        className="mt-3 w-75"
                        {...register("Transmission")}
                        placeholder="Transmission type"
                    /><br />
                    <input
                        className="mt-3 w-75"
                        {...register("condition")}
                        placeholder="Condition type"
                    /><br />
                    <input
                        className="mt-3 w-75"
                        {...register("year")}
                        type="number"
                        placeholder="Which year made by that car"
                    /><br />
                    <input
                        className="mt-3 w-75"
                        {...register("price")}
                        type="number"
                        placeholder="Enter the car price "
                    /><br />
                    <input
                        className="mt-3 w-75"
                        {...register("mileage")}
                        placeholder="Mile Age"
                    /><br />
                    <input
                        className="mt-3 w-75"
                        {...register("fuelType")}
                        placeholder="Fuel Type"
                    /><br />
                    <input
                        className="mt-3 w-75"
                        {...register("engineSize")}
                        placeholder="Engine Size"
                    /><br />
                    <input
                        className="mt-3 w-75"
                        {...register("doors")}
                        placeholder="How many doors has.."
                    /><br />
                    <input
                        className="mt-3 w-75"
                        {...register("cylinder")}
                        type="number"
                        placeholder="How many cylinder has.."
                        /> <br />
                        <input
                        className="mt-3 w-75"
                        {...register("vin")}
                        placeholder="What's car vin.."
                    /> <br />
                    <textarea
                        className="mt-3 w-75"
                        {...register("description")}
                        placeholder="Car details..."
                    /> <br /><br />
                    <Button type="submit" variant="contained">Add </Button>
                    </form>
                </div>
            </div>
    </div>
    );
};

export default AddProducts;