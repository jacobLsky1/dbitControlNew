import React, { Fragment, useState } from "react";
import {Link} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';

const Register = ({setAuth}) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    dbitPassword: "",
  });

  const { email, password, name, dbitPassword } = inputs;

  const notify = (text) => toast(text);

  const onChange = e =>
  setInputs({ ...inputs, [e.target.name]: e.target.value });

const onSubmit = async e =>{
    e.preventDefault()
    try {

        const body = {email,password,name,dbitPassword}

        const response = await fetch("https://dbit-control-new.herokuapp.com/auth/register",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })

        const parseResponse = await response.json()

     

        if(parseResponse!=='Missing Credentials' && parseResponse!=='Invalid Email' && parseResponse!=='User Already Exists' &&parseResponse!=='Wrong Dbit Password'){
          localStorage.setItem("token",parseResponse.token);
          setAuth(true);
          }else{
            notify(parseResponse)
          }
    } catch (error) {
        console.error(error.message);
    }
}


  return (
    <div>
      <Fragment>
        <h1 className="text-center my-5">Register</h1>
        <form onSubmit={onSubmit}>
          <input
           type="text"
           name="email"
           value={email}
           placeholder="email"
           onChange={e => onChange(e)}
           className="form-control my-3"
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={e => onChange(e)}
            className="form-control my-3"
          />
          <input
              type="text"
              name="name"
              value={name}
              placeholder="name"
              onChange={e => onChange(e)}
              className="form-control my-3"
          />
          <input
              type="password"
              name="dbitPassword"
              value={dbitPassword}
              placeholder="dbit password"
              onChange={e => onChange(e)}
              className="form-control my-3"
          />
          <button className="btn btn-success btn-block">Register</button>
        </form>
        <Link to="/login">Go To Login</Link>
      </Fragment>
      <Toaster />
    </div>
  );
};

export default Register;
