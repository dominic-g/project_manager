// src/App.js
import React, {  useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { FirebaseProvider } from './providers/FirebaseProvider';
import {Home, Landing} from './components/Home';
import { useAuth } from './context/AuthContext';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Projects from './components/Projects';
import Tasks from './components/Tasks';
import ProjectDetail from './components/ProjectDetail';


const App = () => {

  const { authenticated, gotResponse } = useAuth();

  const [isActive, setIsActive] = useState(false);
  const toggleSidebar = () => {
    console.log("clicked " + isActive);
    setIsActive(!isActive);
  };

  useEffect(() => {

    const removeLoadingClass = () => {
          document.body.classList.remove('loading');
        };
    
        window.onload = removeLoadingClass;
    
        // Cleanup the event listener on component unmount
        return () => {
          window.onload = null;
        };
  }, [gotResponse]);


    return (

      <FirebaseProvider>
        <Router>
          <Routes>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={authenticated ? <Home /> : <Landing />}/>
          <Route
            exact
            path="/home"
            element={authenticated ? <Home value={{isActive, toggleSidebar}}/> : <Navigate replace to="/login" />}
          />
          <Route
            exact
            path="/projects"
            element={authenticated ? <Projects  value={{isActive, toggleSidebar}}/> : <Navigate replace to="/login" />}
          />
          <Route
            exact
            path="/tasks"
            element={authenticated ? <Tasks  value={{isActive, toggleSidebar}}/> : <Navigate replace to="/login" />}
          />
          <Route
            exact
            path="/project/:id"
            element={authenticated ? <ProjectDetail  value={{isActive, toggleSidebar}}/> : <Navigate replace to="/login" />}
          />

          </Routes>
        </Router>
      </FirebaseProvider>
    );
  
};

export default App;
