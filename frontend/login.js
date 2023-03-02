import React from 'react'

const Login = () => {
  return (
    <div>

        <h2>LOGIN</h2>
        <form>
            <label>Name:</label>
            <input type="text" placeholder='Enter your name'></input>
            <label>Password:</label>
            <input type="text" placeholder='Enter your password'></input>
        </form>
    </div>
  )
}

export default Login