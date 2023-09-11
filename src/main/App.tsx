import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CustomerList from '../customer/CustomerList';

function App() {
  return (
    <div className='container'>
      <Header subtitle='Please check your bookings'/>
      <CustomerList/>
    </div>
  );
}

export default App;
