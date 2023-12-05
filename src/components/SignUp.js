// Signup.js
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  console.log('Signup Function:', signup);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const errorRef = useRef(null);

  
  const handleSignup = async () => {
    try {
      setError('');
      await signup(email, password);
      setSuccessMessage('Account created successfully. You can now log in.');
    } catch (error) {
      console.error('Signup Error:', error);
      setError('Failed to create an account. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleSignup(); 
  };
    // Update error state when input values change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(''); // Clear the error when email changes
    setSuccessMessage('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(''); // Clear the error when password changes
    setSuccessMessage('');
  };
  return (
    <>
      <Helmet>
        <link rel="preload" href={`${process.env.PUBLIC_URL}/assets/util-login.css`} as="style" onload="this.onload=null;this.rel='stylesheet'"/>
        <link rel="preload" href={`${process.env.PUBLIC_URL}/assets/main-login.css`} as="style" onload="this.onload=null;this.rel='stylesheet'"/>
        <noscript>
          {`
            <link rel="stylesheet" type="text/css" href="${process.env.PUBLIC_URL}/assets/util-login.css" />
            <link rel="stylesheet" type="text/css" href="${process.env.PUBLIC_URL}/assets/main-login.css" />
          `}
        </noscript>
        <title>Signup React Project Manager</title>
      </Helmet>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
            <form className="login100-form validate-form flex-sb flex-w" onSubmit={handleSubmit}>
              <span className="login100-form-title">
                Sign Up
              </span>
              <h3 ref={errorRef} className="error">
                {error && <p className="p-t-30 error">{error}</p>}
                {successMessage && <p className="p-t-30 success">{successMessage}</p>}
              </h3>
              <div className="p-t-31 p-b-9">
                <span className="txt1">
                  Username
                </span>
              </div>
              <div className="wrap-input100 validate-input" data-validate = "Email is required">
                <input className="input100" name="email"  type="email" value={email}  onChange={handleEmailChange} />
                <span className="focus-input100"></span>
              </div>
              
              <div className="p-t-13 p-b-9">
                <span className="txt1">
                  Password
                </span>

              </div>
              <div className="wrap-input100 validate-input" data-validate = "Password is required">
                <input className="input100" type="password" name="pass" value={password} onChange={handlePasswordChange}/>
                <span className="focus-input100"></span>
              </div>

              <div className="container-login100-form-btn m-t-37">
                <button className="login100-form-btn">
                  Sign Up
                </button>
              </div>

              <div className="w-full text-center p-t-55">
                <span className="txt2">
                  Already have an account?
                </span>

                <a href="/login" className="txt2 bo1">
                  Login now
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
