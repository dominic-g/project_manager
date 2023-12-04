// src/components/Home.js
import React from 'react';
import Header from './Header';
// import { NavLink } from 'react-router-dom';

const Home = ({ projects, notifications }) => {
  const pageTitle = "Home"
  return (
    <Header title={pageTitle} />
    /*<div>
      <h1>Home</h1>
      <p>Number of projects: {projects.length}</p>
      {// Add similar sections for tasks in 'pending', 'active', 'late', 'completed' }
      <NavLink to="/project/1">Project 1</NavLink>
    </div>*/
  );
};

export default Home;