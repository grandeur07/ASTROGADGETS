import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Addgadget = () => {
  //declairing state variables
  const[product_name,setProductName] = useState("")
  const[product_description,setProductDescription] = useState("")
  const[product_category,setProductCategory] = useState("")
  const[product_cost,setProductCost] = useState("")
  const[product_photo,setProductPhoto] = useState("")


// Status messages
const[loading,setLoading] = useState("")
const[success,setSuccess] = useState("")
const[error,setError] = useState("")


// function to add submit
const handleSubmit= async (e)=>{
e.preventDefault();
setLoading("Please wait...")


try{
  // Retrieve product details
  const formData = new FormData();
  formData.append("product_name",product_name)
  formData.append("product_description",product_description)
  formData.append("product_category",product_category)
  formData.append("product_cost",product_cost)
  formData.append("product_photo",product_photo)

// Posting data to base url(api)
const response = await axios.post("https://mathiasoryx.alwaysdata.net/api/add_product",formData)
setLoading("")
setSuccess(response.data.success)

}catch{
  setError(error.Message)
}
}
  return (
    <div className='row justify-content-center'>
      <nav>
        <Link to="/" className='btn btn-dark'>GET ALL PRODUCTS</Link>
      </nav>

      <div className='col-md-6 card shadow m-2 p-4'>
        <h1>Upload product</h1>
        {/* Binding of variables */}
        {error} <br />
        {success}
        {loading}

        <form action="" onSubmit={handleSubmit}>

          <input type="text" 
            placeholder='Enter name of the product'
            value={product_name}
            className='form-control'
            onChange={(e)=>setProductName(e.target.value)} 
            required/>
            <br />

          <textarea 
          className='form-control'
           placeholder='Describe your product'
           value={product_description}
           onChange={(e)=>setProductDescription(e.target.value)}
           required>
          </textarea>
          <br />

          <input 
            type="number" 
            placeholder='Enter product cost' 
            value={product_cost}
            className='form-control'
            onChange={(e)=>setProductCost(e.target.value)}
            required/>
            <br />

          <select className='form-control' onChange={(e)=>setProductCategory(e.target.value)}>
            <option value="">Choose Category</option>
            <option value="Console">Console</option>
            <option value="Controller">Controller</option>
            <option value="Ps4 Game">Ps4 Game</option>
            <option value="Other Accessory">Other Accessory</option>
          </select>
          <br />
          {/* Binding variable */}
          {product_category}


          <input 
            type="file" 
            className='form-control'
            accept="image/*"
            onChange={(e)=>setProductPhoto(e.target.files[0])} 
            required/>
            <br />


          <input 
            type="submit" 
            value='Addproduct' 
            className='btn btn-danger w-100'  /> <br />


          

        </form>
      </div>
    </div>
  )
}

export default Addgadget