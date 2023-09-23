import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CustomerList from '../customer/CustomerList';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import CustomerDetails from '../customer/CustomerDetails';
import CustomerAdd from '../customer/CustomerAdd';
import CustomerEdit from '../customer/CustomerEdit';
import LoginPage from './LoginPage';
import { login } from '../services/authenticateService';

function App() {
  
  const isLoggedIn = !!localStorage.getItem('jwtToken');
  const handleLogout = () => {
    // Clear the JWT token from localStorage or perform any other necessary logout actions
    localStorage.removeItem("jwtToken");
    // Redirect the user to the login page after logout
    window.location.href = "/";
  };
  
  return (
    <BrowserRouter>
    
    <Header subtitle="Please check your bookings" isLoggedIn={isLoggedIn} onLogout={handleLogout} />
    <div className='container'>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/customer" /> : <LoginPage />} />   
        <Route path="/customer" element={isLoggedIn ? <CustomerList /> : <Navigate to="/" />} /> 
        <Route path="/customer/add" element={isLoggedIn ? <CustomerAdd /> : <Navigate to="/" />} /> 
        <Route path="/customer/edit/:id" element={isLoggedIn ? <CustomerEdit /> : <Navigate to="/" />} /> 
        <Route path="/customer/:id" element={isLoggedIn ? <CustomerDetails /> : <Navigate to="/" />} /> 
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
