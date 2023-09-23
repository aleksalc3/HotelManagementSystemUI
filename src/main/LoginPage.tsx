import React, { useEffect, useState } from 'react';
import { User } from '../types/user';
import { login } from '../services/authenticateService';
import { useNavigate } from 'react-router-dom'; // Add this import

const LoginPage: React.FC = (history ): JSX.Element => {
  const [user, setUser] = useState<User>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    
    try {
       
      const token = await login(user).then(data=>{
        localStorage.setItem('jwtToken', data.token);
      console.log('JWT Token:', data.token);
      // Store the token in localStorage or a secure storage method
      try {
        window.location.href = "/customer";
      } catch (error) {
        console.error('Navigation error:', error);
      }
      
      });
      
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="text" name="email" value={user.email} onChange={handleInputChange} className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input type="password" name="password" value={user.password} onChange={handleInputChange} className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
              {error && <p className="text-danger mt-3">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
