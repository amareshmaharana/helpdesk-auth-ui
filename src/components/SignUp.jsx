import { Link } from 'react-router-dom';
import './auth.css';

const SignUp = () => {
  return (
    <div className="container">
      <div className="form-box">
        <h2 className='heading'><i>Helpdesk System</i></h2>
        <p className='sub-heading'>Sign up here</p>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="email" placeholder="Email" />
        <button className="blue-btn">Sign Up</button>
        <div className="footer-links">
          <Link to="/forgot-password" className="forgot">Forgot password</Link>
          <Link to="/" className="link">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
