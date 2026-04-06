import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Signin = () => {
  //Declairing state variables
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")

  // Status messages
  const[loading,setLoading] = useState("")
  const[error,setError] = useState("")
  const[success,setSuccess] = useState("")


  // Navigation
  const navigate = useNavigate()
  // Function to sign in
const handleSignin = async(e) =>{
  e.preventDefault()
  setLoading("Please wait...")
   try{
    // Retrieveing user details
    const formData = new FormData();
    formData.append("email",email)
    formData.append("password", password)

    // Adding base url
    const response = await axios.post("https://mathiasoryx.alwaysdata.net/api/signin",formData)
    if(response.data.user){
      setSuccess(response.data.Message)
      setLoading("  ")
      localStorage.setItem("user",JSON.stringify(response.data.user))
      navigate("/getgadget")
    
    }else{
      setError(response.data.Message)
      setLoading("")
    }
   }catch (error){
    setError(error.message)
   }
}


  return (
    <div className='row justify-content-center'>
      <div className='col-md-6 card shadow m-2 p-4'>
        <h1>Log into your Account</h1>
        {/* Binding variables */}
          {error} <br />
          {success}
          {loading}

        <form action="" onSubmit={handleSignin}>
          
          <input type="email" placeholder='Enter email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/> <br />
          <input type="password" placeholder='Enter password' className='form-control' onChange={(e)=>setPassword(e.target.value)}/><br />
          <input type="submit" value="sign in" className='btn btn-danger W-100'/> <br />

          <Link to='/Signup'>Dont have an account? SignUp</Link>
        </form>
      </div>
    </div>
  )
}

export default Signin