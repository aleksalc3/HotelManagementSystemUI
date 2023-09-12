import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CustomerList from '../customer/CustomerList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerDetails from '../customer/CustomerDetails';
import CustomerAdd from '../customer/CustomerAdd';
import CustomerEdit from '../customer/CustomerEdit';

function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <Header subtitle='Please check your bookings'/>
      <Routes>
        <Route path="/" element={<CustomerList/>}></Route>        
        <Route path="/customer/add" element={<CustomerAdd/>}></Route>
        <Route path="/customer/edit/:id" element={<CustomerEdit/>}></Route>
        <Route path="/customer/:id" element={<CustomerDetails/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
