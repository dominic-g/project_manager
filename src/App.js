// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { FirebaseProvider } from './providers/FirebaseProvider';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import { useAuth } from './context/AuthContext';
import './App.css';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const { user } = useAuth();

 
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
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate replace to={"/login"} />}
        />
        <Route
          exact
          path="/project/:id"
          element={user ? <ProjectDetail /> : <Navigate replace to={"/login"} />}
        />

        </Routes>
      </Router>
    </FirebaseProvider>
  );
};

export default App;
