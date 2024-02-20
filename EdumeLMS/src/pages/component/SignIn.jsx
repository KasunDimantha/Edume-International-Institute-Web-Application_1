import React from 'react'
import './Component.css'
import signinimg from './img/photo02.avif'
import { Link } from "react-router-dom";
import img1 from './img/Facebook.png'
import img2 from './img/Google.png'
import img3 from './img/linkedin.png'

function SignIn() {
  return (
    <div className='signInPage'>
      <img src={signinimg} alt="signinimg" className='photo02'/>

      <div className="logingCont">

        <div className="loging">
          <h2>Loging Here !!!</h2>
          <p className='p1'>Loging Using Social Networks</p>
          <div className="logingSocial">
              <img src={img1} alt="facebook"  className="facebook"/>
              <img src={img2} alt="google" className="google" />
              <img src={img3} alt="linedin" className="linkedin"/>
          </div>
          <div className="username">
            <p className='p2'>User Name</p>
            <input type="text"  placeholder='User Name' />
          </div>
          <div className="password">
            <p className='p3'>Password</p>
            <input type="text"  placeholder='password' />
          </div>
          <div className='B_signIn'>
            <button>Sign In</button>
          </div>
          
        </div>



        <div className="register">
          <h2>New Here ?</h2>
          <p>Sign up and discover a great <br />amount of new opportunities!</p>
          <Link to="/signUpPage" ><button>Sign Up</button></Link>
          
        </div>

      </div>
    </div>
  )
}

export default SignIn