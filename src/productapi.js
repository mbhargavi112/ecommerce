import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Product() {
    const navigate=useNavigate();
    const redirect=()=>{
     navigate("/productPost")
    }

    const [details, setDetails] = useState();
    const getproductdetails = async () => {
        let details = await axios.get("https://fakestoreapi.com/products")
        setDetails(details.data);
    }
    useEffect(() => {
        getproductdetails()
    })
    return (

        <div className='product-container'>
            {details && details.map((el,i) => {
                return (
                    <div className='card' key={i}>
                        <div className='d-flex justify-content-center align-items-center'>
                        <img className='image' src={el.image}></img>
                        </div>
                        <p className='text-primary'>{el.title}</p>
                        <p>{el.price}</p>
                        <p>{el.category}</p>
                        <p className='align'>{el.description}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Product;