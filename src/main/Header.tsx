import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
type Args={
    subtitle:string;
    isLoggedIn: boolean; // Add a prop to indicate user's login status
    onLogout: () => void; // Add a callback for handling logout
}
const Header = ({ subtitle, isLoggedIn, onLogout }: Args) => {
    
  const navbarStyle = {
    backgroundColor: '#e3f2fd',
  };
      
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={navbarStyle}>
      <a className="navbar-brand" href="#">
      <img src="https://img.favpng.com/22/5/6/hotel-icon-travel-icon-resort-icon-png-favpng-rfagdvVdPGBmg949s9h1wP1A8.jpg" width="35" height="35" className="d-inline-block align-top" alt="" />
      Hotel Management System
    </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          
          <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
          <button className="nav-item nav-link" >Bookings</button>
          <a className="nav-item nav-link" href="#">Room</a>
          <a className="nav-item nav-link" href="#">About</a>
        </div>
      </div>
     
      <form className="form-inline">
      {isLoggedIn && (
      <button onClick={onLogout} className="btn btn-secondary button-style">
              Logout
            </button>
            )}
  </form>
    </nav>
  );
  };
  
export default Header;