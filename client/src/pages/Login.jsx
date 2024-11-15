import axios from 'axios';
import React, { useContext, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  })
  const [err, setError] = useState(null);
  const navigate = useNavigate()

  const {login} = useContext(AuthContext)

  // console.log(currentUser)

  const handleChange = e => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try{
      // const res = await axios.post("http://localhost:8800/api/auth/login", inputs, { withCredentials: true });
      await login(inputs)
      navigate("/")
      // console.log(res)
    } catch(err){
      setError(err.response.data)

    }
  }
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input required type="text" placeholder='username' name='username' onChange={handleChange} />
        <input required type="password" placeholder='password' name='password' onChange={handleChange } />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Você não tem uma conta? <Link to="/register">Register</Link> </span>
      </form>
    </div>
  )
}

export default Login