import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
function Productpost() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const getproductdetails = async (data) => {
        let result = await axios.post("https://fakestoreapi.com/products",
            data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }
    console.log('result');
    return (
        <div className='card  d-flex justify-content-center align-items-center'>
            <h5>
                product create
            </h5>
            <form onSubmit={handleSubmit(getproductdetails)}>
                <div className='m-2'>
                    <input type="text"{...register('title', { required: true })} class="form-control" placeholder='title'></input>
                    {errors.title && <span className='text-danger'>please enter the title</span>}
                </div>
                <div className='m-2'>
                    <input type="text" {...register('price', { required: true })} class="form-control" placeholder='price'></input>
                    {errors.price && <span className='text-danger'>please enter the price</span>}
                </div>
                <div className='m-2'>
                    <input type="text"{...register('category', { required: true })} class="form-control" placeholder='category'></input>
                    {errors.category && <span className='text-danger'>please enter the category</span>}
                </div>
                <div className='m-2'>
                    <input type="text"{...register('description', { required: true })} class="form-control" placeholder='description'></input>
                    {errors.description && <span className='text-danger'>please enter the description</span>}
                </div>
                <div className='m-2'>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Productpost;