import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({showAlert}) => {
    const [credentials, setCredentials] = useState({email:"",password:""});

    let Navigate = useNavigate()


    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("https://notevotes-codervikas94.vercel.app/:5000/api/auth/login", {
            method: 'POST',
           headers: {
              'Content-Type': 'application/json'

            },  
            body: JSON.stringify({email:credentials.email,password:credentials.password})

            })
         const json = await response.json()
            console.log("response",json);
            if(json.success){
                // redirect 

                localStorage.setItem('token',json.authtoken)
                Navigate("/");
                showAlert("Logged In Successfully","success")

            } else {
              showAlert("Invalid Details","danger")
            }
        
    }

    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]: e.target.value})
      }

  return (

    <div className="mb-3 w-25 h-50 justify-content-center m-auto p-5 border rounded-5 border-dark border-2">
<form onSubmit={handleSubmit} >
  <div className="mb-3 my-5 py-2 ">
    <label htmlFor="Email" className="form-label">Email address</label>
    <input onChange={onChange} value={credentials.email} type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"/>
    <div id="Email" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3 my-1">
    <label htmlFor="password" className="form-label">Password</label>
    <input onChange={onChange} value={credentials.password} type="password" className="form-control"  name="password" id="password"/>
  </div>
  <div className="d-grid gap-2 my-1 py-5">
  <button className="btn btn-primary" type="submit" >Submit</button>
</div>
</form>
</div>
    )
}

export default Login