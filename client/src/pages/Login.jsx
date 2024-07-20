import React from 'react'
import {Link} from "react-router-dom"

const login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input required type="text" placeholder='username' />
        <input required type="text" placeholder='password' />
        <button>Login</button>
        <p>This is an error!</p>
        <span>Você não tem uma conta? <Link to="/register">Register</Link> </span>
      </form>
    </div>
  )
}

export default login