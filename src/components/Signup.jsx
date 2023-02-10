import React, { useState } from "react";
import { useNavigate } from "react-router";

const Signup = ({showAlert}) => {
  const [credentials, setCredentials] = useState({name:"",email:"",password:""});
 const Navigate = useNavigate();

  const onChange = (e)=>{
    setCredentials({...credentials,[e.target.name]: e.target.value})
  }
  const handleSubmit = async(e)=> {
    e.preventDefault();
const {name,email,password} = credentials

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
           headers: {
              'Content-Type': 'application/json'

            },  
            body: JSON.stringify({name,email,password})

            })
         const json = await response.json()
            console.log("response",json);
            if(json.success){
                // redirect 

                localStorage.setItem('token',json.authtoken)
                Navigate("/");
                showAlert("Account created Successfully","success")

            } else {
              showAlert("User all ready exits","danger")
            }
        

  }
  return (
    <div className="mb-3 w-25 justify-content-center m-auto p-5 border rounded-5 border-dark border-2 ">
    <form onSubmit={handleSubmit} >
    <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input onChange={onChange} value={credentials.name} type="text" className="form-control"  name="name" id="name" minLength="5" required/>
      </div>
      <div className="mb-3">
        <label htmlFor="Email" className="form-label">Email</label>
        <input onChange={onChange} value={credentials.email} type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"required minLength="5" />
        <div id="Email" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input onChange={onChange} value={credentials.password} type="password" className="form-control"  name="password" id="password" minLength="5" required/>
      </div>
      <div className="mb-3">
        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
        <input onChange={onChange} value={credentials.password} type="password" className="form-control"  name="cpassword" id="cpassword"  minLength="5" required/>
      </div>
      <div className="d-grid gap-2">
      <button className="btn btn-primary" type="submit" >Submit</button>
    </div>
    </form>
    </div>
  );
};

export default Signup;
