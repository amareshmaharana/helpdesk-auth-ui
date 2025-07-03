import React from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

const ForgotPassword = () => {
  return (
    <div className="container">
      <div className="form-box">
        <p>Don’t worry, Enter your email below and we will<br />send you a link to change password.</p>
        <input type="email" placeholder="Email" />
        <button className="green-btn">Submit</button>
        <Link to="/" className="blue-btn">Sign In</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
