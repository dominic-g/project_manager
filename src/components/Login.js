// Login.js
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { signin } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const errorRef = useRef(null);

  const handleLogin = async () => {
    try {
      setError('');
      await signin(email, password);
      navigate('/');
    } catch (error) {
      setError('Failed to log in. Check your email and password.');
      errorRef.current && errorRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleLogin(); 
  };
    // Update error state when input values change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(''); // Clear the error when email changes
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(''); // Clear the error when password changes
  };
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href={`${process.env.PUBLIC_URL}/assets/util-login.css`}/>
        <link rel="stylesheet" href={`${process.env.PUBLIC_URL}/assets/main-login.css`}/>
  
        <title>Login React Project Manager</title>
      </Helmet>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
            <form className="login100-form validate-form flex-sb flex-w" onSubmit={handleSubmit}>
              <span className="login100-form-title">
                Sign In
              </span>
              <h3 ref={errorRef} className="error">{error && <p className="p-t-30">{error}</p>}</h3>
              <div className="p-t-31 p-b-9">
                <span className="txt1">
                  Login
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

                <a href="#" className="txt2 bo1 m-l-5">
                  Forgot?
                </a>
              </div>
              <div className="wrap-input100 validate-input" data-validate = "Password is required">
                <input className="input100" type="password" name="pass" value={password} onChange={handlePasswordChange}/>
                <span className="focus-input100"></span>
              </div>

              <div className="container-login100-form-btn m-t-37">
                <button className="login100-form-btn">
                  Sign In
                </button>
              </div>

              <div className="w-full text-center p-t-55">
                <span className="txt2">
                  Not a member?
                </span>

                <a href="/signup" className="txt2 bo1">
                  Sign up now
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
