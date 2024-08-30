import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div>
      <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
               <h3 className="loginLogo">LamaSocial</h3>
               <span className="loginDesc"> 
                connect with friends and the world around you on LamaSocial.
               </span>
            </div>

            <div className="loginRight">
               <div className="loginBox">
                <input className='loginInput' placeholder=' Username' />     
                <input className='loginInput' placeholder='Email' /> 
                <input className='loginInput' placeholder='Password' type='password' /> 
                <input className='loginInput' placeholder='Password Again' type='password' /> 

                <button className="loginButton">Sign up</button>
                <button className="loginRegistrationButton">
                   Log into Account
                </button>    

               </div>
            </div>

        </div>
        </div>
      </div>
  )
}

export default Register