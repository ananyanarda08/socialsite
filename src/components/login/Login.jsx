import React from 'react'
import './Login.css'

const Login = () => {
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
                <input className='loginInput' placeholder='Email' />     
                <input className='loginInput' placeholder='password' /> 
                <button className="loginButton">Log in</button>
                <span className="loginForget">Forget Password</span>
                <button className="loginRegistrationButton">
                  Creat New Account
                  </button>    

               </div>
            </div>

        </div>
        </div>
      </div>
  )
}

export default Login