import React, { useState } from 'react';
import './App.css';

const App = () => {
  const IMGURL = import.meta.env.BASE_URL;
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showSignupConfirmPassword, setShowSignupConfirmPassword] = useState(false);
  const [isLoginView, setIsLoginView] = useState(false);

  const renderLogin = () => (
    <div className='login-container'>
      <h2>Sign in with email</h2>
      <div className='input-group'>
        <img className='left-icon' src={IMGURL + 'mail.png'} alt='Email Icon' />
        <input type='text' placeholder='Enter your email' />
      </div>
      <div className='input-group'>
        <img className='left-icon' src={IMGURL + 'lock.png'} alt='Password Icon' />
        <input type={showLoginPassword ? 'text' : 'password'} placeholder='Enter your password' />
        <img
          className='right-icon'
          src={IMGURL + 'eye.png'}
          alt='Toggle password visibility'
          onClick={() => setShowLoginPassword((prev) => !prev)}
        />
      </div>
      <div className='forgot-password'>Forgot <label>Password</label>?</div>
      <button>Get Started</button>
      <p>
        Don't have an account?{' '}
        <label onClick={() => setIsLoginView(false)}>Sign up</label>
      </p>
    </div>
  );

  const renderSignup = () => (
    <div className='signup-container'>
      <h2>Create Account</h2>
      <div className='input-group'>
        <img className='left-icon' src={IMGURL + 'user.png'} alt='Full name icon' />
        <input type='text' placeholder='Full Name' />
      </div>
      <div className='input-group'>
        <img className='left-icon' src={IMGURL + 'mail.png'} alt='Email icon' />
        <input type='text' placeholder='Email' />
      </div>
      <div className='input-group'>
        <img className='left-icon' src={IMGURL + 'phone.png'} alt='Phone icon' />
        <input type='text' placeholder='Mobile Number' />
      </div>
      <div className='input-group'>
        <img className='left-icon' src={IMGURL + 'lock.png'} alt='Password icon' />
        <input type={showSignupPassword ? 'text' : 'password'} placeholder='Password' />
        <img
          className='right-icon'
          src={IMGURL + 'eye.png'}
          alt='Toggle password visibility'
          onClick={() => setShowSignupPassword((prev) => !prev)}
        />
      </div>
      <div className='input-group'>
        <img className='left-icon' src={IMGURL + 'lock.png'} alt='Confirm password icon' />
        <input type={showSignupConfirmPassword ? 'text' : 'password'} placeholder='Confirm Password' />
        <img
          className='right-icon'
          src={IMGURL + 'eye.png'}
          alt='Toggle confirm password visibility'
          onClick={() => setShowSignupConfirmPassword((prev) => !prev)}
        />
      </div>
      <button>Register</button>
      <p>
        Already have an account?{' '}
        <label onClick={() => setIsLoginView(true)}>Login Here</label>
      </p>
    </div>
  );

  return <div className='app'>{isLoginView ? renderLogin() : renderSignup()}</div>;
}

export default App;