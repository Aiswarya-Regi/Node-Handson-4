import React from 'react'

const Register = () => {
  return (
    <div>
        
        <h2>REGISTER HERE</h2>
        <form>
            <label>Name:</label>
            <input type="text" placeholder='Enter your name'></input>
            <label>Phone:</label>
            <input type="number" placeholder='Enter your phone'></input>
            <label>Email:</label>
            <input type="email" placeholder='Enter your Email'></input>
            <label>Password:</label>
            <input type="text" placeholder='Enter your password'></input>
        </form>

    </div>
  )
}

export default Register
