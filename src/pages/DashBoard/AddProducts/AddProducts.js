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
                <div className="addservice shadow py-3 rounded">
                    <h1 className="service-text">Add a New Service</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="add">
                    <input
                        className="mt-3 w-75"
                        {...register("img", { required: true})}
                        placeholder="Picture url please"
                    /> <br />
                    <input
                        className="mt-3 w-75"
                        {...register("name", { required: true, maxLength: 20 })}
                        placeholder="Car Name or model"
                    /> <br />
                    <input
                        className="mt-3 w-75"
                        {...register("make",{ required: true})}
                        placeholder="Which company made that car"
                    /> <br />
                    <input
                        className="mt-3 w-75"
                        {...register("model",{ required: true})}
                        placeholder="Car model "
                    /> <br />
                    <input
                        className="mt-3 w-75"
                        {...register("color",{ required: true})}
                        placeholder="Car color"
                    /> <br />
                    <input
                        className="mt-3 w-75"
                        {...register("driveType",{ required: true})}
                        placeholder="Drive type ---"
                    /> <br />
                    <input
                        className="mt-3 w-75"
                        {...register("Transmission",{ required: true})}
                        placeholder="Transmission type"
                    /><br />
                    <input
                        className="mt-3 w-75"
                        {...register("condition",{ required: true})}
                        placeholder="Condition type"
                    /><br />
                    <input
                        className="mt-3 w-75"
                        {...register("year",{ required: true})}
                        type="number"
                        placeholder="Which year made by that car"
                    /><br />
                    <input
                        className="mt-3 w-75"
                        {...register("price",{ required: true})}
                        type="number"
                        placeholder="Enter the car price "
                    /><br />
                    <input
                        className="mt-3 w-75"
                        {...register("mileage",{ required: true})}
                        placeholder="Mile Age"
                    /><br />
                    <input
                        className="mt-3 w-75"
                        {...register("fuelType",{ required: true})}
                        placeholder="Fuel Type"
                    /><br />
                    <input
                        className="mt-3 w-75"
                        {...register("engineSize",{ required: true})}
                        placeholder="Engine Size"
                    /><br />
                    <input
                        className="mt-3 w-75"
                        {...register("doors",{ required: true})}
                        placeholder="How many doors has.."
                    /><br />
                    <input
                        className="mt-3 w-75"
                        {...register("cylinder",{ required: true})}
                        type="number"
                        placeholder="How many cylinder has.."
                        /> <br />
                        <input
                        className="mt-3 w-75"
                        {...register("vin",{ required: true})}
                        placeholder="What's car vin.."
                    /> <br />
                    <textarea
                        className="mt-3 w-75"
                        {...register("description",{ required: true})}
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