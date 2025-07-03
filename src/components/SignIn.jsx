import React from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

const SignIn = () => {
  return (
    <div className="container">
      <div className="form-box">
        <h2><i>Helpdesk System</i></h2>
        <p>Welcome back!</p>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="green-btn">Sign In</button>
        <div className="footer-links">
          <Link to="/forgot-password" className="forgot">Forgot password</Link>
          <Link to="/sign-up" className="link">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
