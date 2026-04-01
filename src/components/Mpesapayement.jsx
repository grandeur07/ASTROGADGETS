import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';


const Mpesapayement = () => {

// Declairing state variables
const {product} = useLocation().state || {};
const[phone,setPhone] = useState("")
const[messages,setMessages] = useState("")
const[error,seterror] = useState("")

// image url
  const img_url = "https://mathiasoryx.alwaysdata.net/static/images/"


// function for mpesa payement
const handlesubmit = async(e)=>{
  e.preventDefault()
  setMessages("Please wait as we process the transaction")

try{
  // retrieving user and product details for submission
  const formData = new FormData()
  formData.append("phone", phone)
  formData.append("amount",product.product_cost)

  // adding bae url form mpesa payement request
  const response = await axios.post("https://modcom2026.alwaysdata.net/api/mpesa_payment", formData)
  setMessages(response.data.message)

} catch (error){
  seterror(error.message)
}
}





  return (
    <div className='row justify-content-center mt-2'>
      <h3>LIPA NA MPESA</h3>
{/* Binding */}
{messages}
{error}

      {/* make payement body */}
      <div className='col-md-6 card shadow card-margin mb-4 '>
        <img src={img_url + product.product_photo} alt={product.product_photo} />
        <p>Product Name: {product.product_name}</p>
        <p className='text-danger'>Product Cost: {product.product_cost}</p>

        {/* mpesa payement form */}
        <form action="" onSubmit={handlesubmit}>
          <label >Phone number</label>
          <input 
            type="tel" 
            placeholder='Enter Your Phonenumber'
            className='form-control'
            onChange={(e)=>setPhone(e.target.value)}
            />
            <br />
            <button className='btn btn-dark'>Make Payement</button>
        </form>
      </div>
    </div>
  )
}

export default Mpesapayement