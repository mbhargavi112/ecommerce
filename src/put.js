import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
function Productdata() {
    // let navigate=useNavigate();
    // const redirect=()=>{
    //     navigate("/ProductDelete")
    // }
    const [details, setDetails] = useState();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const resetAsyncForm = useCallback(async () => {
        let result = await axios.get("https://fakestoreapi.com/products/2")
        reset(result.data)
    }
    )
    const getproductdetails = async (data) => {
        console.log(data);
        const result = await axios.put("https://fakestoreapi.com/products/2",
        data, {
            headers: {
                'content-type': 'applicationform/json'
            }
        })
        alert("Product successfully updated")
    }
    useEffect(() => {
        resetAsyncForm()
    }, [])


    return (
        <div>
            <h5><b>Update product details</b></h5>
            <div className='d-flex justify-content-center align-items-center'>
                <form onSubmit={handleSubmit(getproductdetails)}>
                    {/* <div className='m-2'>
                        <input type="text"  {...register('image', { required: true })} class="form-control" placeholder="image"></input>
                        {errors.image && <span className='text-danger'>please insert the image</span>}
                    </div> */}
                    <div className='m-2'>
                        <input type="text" {...register('title', { required: true })} class="form-control" placeholder="title"></input>
                        {errors.title && <span className='text-danger'>please enter the title</span>}
                    </div>
                    <div className='m-2'>
                        <input type="text" {...register('price', { required: true })} class="form-control" placeholder="price"></input>
                        {errors.price && <span className='text-danger'>please enter the price</span>}
                    </div>
                    <div className='m-2'>
                        <input type="text"{...register('category', { required: true })} class="form-control" placeholder="category"></input>
                        {errors.category && <span className='text-danger'>please enter the category</span>}
                    </div>
                    <div className='m-2'>
                        <input type="text" {...register('description', { required: true })} class="form-control" placeholder="description"></input>
                        {errors.description && <span className='text-danger'>please enter the description</span>}
                    </div>
                    <div className='m-2'>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Productdata;