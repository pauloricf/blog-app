import React from 'react'
import {Link} from "react-router-dom"

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
        <input required type="text" placeholder='username' />
        <input required type="email" placeholder='email' />
        <input required type="text" placeholder='password' />
        <button>Register</button>
        <p>This is an error!</p>
        <span>Você já tem uma conta? <Link to="/login">Login</Link> </span>
      </form>
    </div>
  )
}

export default Register