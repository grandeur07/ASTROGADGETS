<<<<<<< HEAD
import { useState } from 'react'
=======
import React, { useState } from 'react'
>>>>>>> 8a40be0da70e08cdf93a6c6de38b69bdba5194c2
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
// declaring state variables
const[username,setUsername] = useState("")
const[email,setEmail] = useState("")
const[phone,setPhone] = useState("")
const[password,setPassword] = useState("")

// status messages
const[loading,setLoading] = useState("")
const[error,setError] = useState("")
const[success,setSuccess] = useState("")

// funtion to signup
const submitSignupDetails =async(e)=>{
  e.preventDefault()
  setLoading("please wait ...")
  try {
    const formData= new FormData();
    formData.append("username",username);
    formData.append("email",email);
    formData.append("phone",phone);
    formData.append("password",password);

    // adding base url

  const response = await axios.post("https://mathiasoryx.alwaysdata.net/api/signup",formData)

  setSuccess(response.data.success)
  setLoading("")

  // reset Values
  setPhone("")
  setUsername("")
  setPassword("")
  setEmail("")

  } catch (error) {
    setError(error.Message)
  }
}


  return (  
    <div className='row justify-content-center ' >
      <div className='col-md-6 card shadow m-2 p-4' >
        <h1>Create an account</h1>
        {/* Binding variables */}
        {loading} <br />
        {error} <br />
        {success} <br />


        {/* Signup form */}
        
        <form onSubmit={submitSignupDetails} >
          <input type="text" placeholder='Enter Username' className='form-control col'  onChange={(e)=>setUsername(e.target.value)}/> <br />
          <input type="email" placeholder='Enter Email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/><br />
          <input type="tel" placeholder='Enter Phone' className='form-control'onChange={(e)=>setPhone(e.target.value)}/><br />
          <input type="Password" placeholder='Enter Password' className='form-control' onChange={(e)=>setPassword(e.target.value)}/><br />

          <input type="submit" value="Sign Up" className='btn btn-danger w-100'/><br />

          {/* Incase someone has an account */}
          <Link to='/signin'>Already have an Account? Login</Link>
          
        </form>
        
      </div>
    </div>
  )

}

export default Signup