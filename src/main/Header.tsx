import React from "react";
import './Header.css';
type Args={
    subtitle:string;
    isLoggedIn: boolean; // Add a prop to indicate user's login status
    onLogout: () => void; // Add a callback for handling logout
}
const Header = ({ subtitle, isLoggedIn, onLogout }: Args) => {
    
    
      
    
      return (
        <header className="header-style " >
            <div className="navbar navbar-dark bg-dark shadow-sm">
            
        <div className="col-2"> {/* Adjust the column width as needed */}
          <img src="https://static.vecteezy.com/system/resources/thumbnails/000/627/396/small/illust58-5847-01.jpg" alt="Your Image" className="img-fluid header-image" />
        </div>
  <div className="container">
  <h1 className="mb-0">Hotel Management System</h1> {/* Improved title */}
    <div className="row">
    
      
    </div>
    <div className="row">
      <div className="col-12 mt-3">
        <p>{subtitle}</p>
      </div>
    </div>
  </div>
  <div className="row">
        <div className="float-end">
          {isLoggedIn && (
            <button onClick={onLogout} className="btn btn-primary button-style">
              Logout
            </button>
          )}
        </div>
      </div>
  </div>
</header>
      );
  };
  
export default Header;