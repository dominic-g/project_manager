// PrivateRoute.js
import React from 'react';
import { Route, Navigate, Routes, BrowserRouter } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Home from './components/Home';

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useAuth();

  return user ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace state={{ from: rest.location.pathname }} />
  );
};

export default PrivateRoute;
