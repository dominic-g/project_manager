// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FirebaseProvider } from './providers/FirebaseProvider';
// import SignUp from './components/SignUp';
// import Login from './components/Login';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import './App.css';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Load projects and notifications from local storage
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
    setProjects(storedProjects);
    setNotifications(storedNotifications);
  }, []);

  useEffect(() => {
    // Save projects and notifications to local storage
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [projects, notifications]);
  
  return (
    <Router>
      <Routes>
        {/* Define the /project/:id route */}
        <Route path="/project/:id" element={<ProjectDetail projects={projects} setProjects={setProjects} />} />

        {/* Define the / route */}
        <Route path="/" element={<Home projects={projects} notifications={notifications} setNotifications={setNotifications} />} />
      </Routes>
    </Router>
  );
};

export default App;
