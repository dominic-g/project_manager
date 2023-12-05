// Signup.js
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../context/AuthContext';
import { _debugErrorMap } from '../context/ErrorContext';

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const errorRef = useRef(null);

  
  const handleSignup = async () => {
    try {
      setError('');
      const error = await signup(email, password, firstName, lastName, username);
      const fullCode = error.code;
      const errorMsg = getErrorMessage(fullCode.replace(/auth\//g, ''));
      if (errorMsg) {
        setError(errorMsg);
        errorRef.current && errorRef.current.scrollIntoView({ behavior: 'smooth' });
      } else {
        setSuccessMessage('Account created successfully. You can now log in.');
      }
    } catch (error) {

      setError('Failed to create an account. Please try again.');
      errorRef.current && errorRef.current.scrollIntoView({ behavior: 'smooth' });
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
  const handleFnameChange = (e) => {
    setFirstName(e.target.value);
    setError(''); // Clear the error when password changes
    setSuccessMessage('');
  };
  const handleSnameChange = (e) => {
    setLastName(e.target.value);
    setError(''); // Clear the error when password changes
    setSuccessMessage('');
  };
  const handleUnameChange = (e) => {
    setUsername(e.target.value);
    setError(''); // Clear the error when password changes
    setSuccessMessage('');
  };
  const getErrorMessage = (errorCode) =>{
    const errorMessage = _debugErrorMap[errorCode];

    if (errorMessage) {
      return errorMessage;
    } else {
      return 'An unknown error occurred. contact admin for assistance';
    }
  }

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
                  Email
                </span>
              </div>
              <div className="wrap-input100 validate-input" data-validate = "Email is required">
                <input className="input100" name="email"  type="email" value={email}  onChange={handleEmailChange} required/>
                <span className="focus-input100"></span>
              </div>
              
              <div className="p-t-13 p-b-9">
                <span className="txt1">
                  Password
                </span>

              </div>
              <div className="wrap-input100 validate-input" data-validate = "Password is required">
                <input className="input100" type="password" name="pass" value={password} onChange={handlePasswordChange} required/>
                <span className="focus-input100"></span>
              </div>
              <hr className="m-t-30 m-b-10" />

              <div className="p-t-15 p-b-9">
                <span className="txt1">
                  First Name
                </span>
              </div>
              <div className="wrap-input100 validate-input" data-validate = "First Name is required">
                <input className="input100" type="text" name="fname" value={firstName} onChange={handleFnameChange} required/>
                <span className="focus-input100"></span>
              </div>

              <div className="p-t-31 p-b-9">
                <span className="txt1">
                  Last Name
                </span>
              </div>
              <div className="wrap-input100 validate-input" data-validate = "Second Name is required">
                <input className="input100" type="text" name="sname" value={lastName} onChange={handleSnameChange} required/>
                <span className="focus-input100"></span>
              </div>

              <div className="p-t-31 p-b-9">
                <span className="txt1">
                  User Name
                </span>
              </div>
              <div className="wrap-input100 validate-input" data-validate = "User Name is required">
                <input className="input100" type="text" name="user" value={username} onChange={handleUnameChange} required/>
                <span className="focus-input100"></span>
              </div>

              <hr className="m-t-30 m-b-10" />

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
