import axios from 'axios';
import React, { useEffect, useState } from 'react';
function ProductDelete() {
    const [details,setdetails]=useState();
    const getproductdetails=async()=>{
        const details=await axios.get("https://fakestoreapi.com/products")
        setdetails(details.data)
    }
    const deletelist=async(data)=>{
        let result=await axios.delete("https://fakestoreapi.com/products/"+data,
        {method:"DELETE"}
        )
        alert("You have successfully deleted");
    }
    useEffect(()=>{
         getproductdetails()
    },[])
    return ( 
        <div className='product-container'>
              {details && details.map((el) => {
                return (
                    <div className='card d-flex justify-content-center align-items-center'>
                        <div className='m-2'>
                        <img className='image' src={el.image}></img>
                        </div>
                        <p className='text-primary'>{el.title}</p>
                        <p>{el.price}</p>
                        <p>{el.category}</p>
                        {/* <p className='align'>{el.description}</p> */}
                        <div className='delete-btn'>
                            
                        <button  onClick={() =>deletelist(el.id)}type="delete" className=' btn btn-danger'>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
     );
}

export default ProductDelete;