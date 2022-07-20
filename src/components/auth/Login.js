import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Login = ({setAuth}) => {

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password} = inputs;

  const onChange = e =>
  setInputs({ ...inputs, [e.target.name]: e.target.value });

  const notify = (text) => toast(text);


  const onSubmit = async e =>{
    e.preventDefault()
    try {

        const body = {email,password}

        const response = await fetch("https://dbit-control-new.herokuapp.com/auth/login",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })

        const parseResponse = await response.json()
        localStorage.setItem("token",parseResponse.token);

        if(parseResponse!=='Missing Credentials' && parseResponse!=='Invalid Email' && parseResponse!=='Password or Email incorrect'){
        setAuth(true);
        }else{
          notify(parseResponse)
        }
    } catch (error) {
        console.error(error.message);
    }
}


  return (
    <div className='container'>
      <>
        <h1 className="text-center my-5">Login</h1>
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
           <button className="btn btn-success btn-block">login</button>
          </form>
          <Link to="/register">Go To Register</Link>
      </>
      <Toaster />
    </div>
  )
}

export default Login