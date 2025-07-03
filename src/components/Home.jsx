import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1 className="header">HELPDESK SYSTEM</h1>
        <p className="text">need help? Initiate a ticket. We'll get back to you.</p>
      </div>
      <div className="btns">
        <Link to="/sign-in">
          <button className="blue-btn">Sign In</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
