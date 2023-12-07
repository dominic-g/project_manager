// src/App.js
import React, {  useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { FirebaseProvider } from './providers/FirebaseProvider';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {Home, Landing} from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import { useAuth } from './context/AuthContext';
import './App.css';


const App = () => {

  const { authenticated } = useAuth();
  console.log(authenticated);



  useEffect(() => {

    const removeLoadingClass = () => {
      document.body.classList.remove('loading');
    };

    window.onload = removeLoadingClass;

    // Cleanup the event listener on component unmount
    return () => {
      window.onload = null;
    };
  }, []);




  return (

    <FirebaseProvider>
      <Router>
        <Routes>

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />}/>
        <Route
          path="/home"
          element={authenticated ? <Home /> : <Navigate replace to="/login" />}
        />
        <Route
          path="/project/:id"
          element={authenticated ? <ProjectDetail /> : <Navigate replace to="/login" />}
        />

        </Routes>
      </Router>
    </FirebaseProvider>
  );
};

export default App;
