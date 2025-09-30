import React from 'react';
const Navbar = ({ userName = "Guest" }) => {
  
  return (
    
    <div className="navbar">
      <div className="logo">
        <img src="/logo2.png" alt="FlyAway Logo" />
      </div>
      <div className="navbar-links">
        <a href="/discover" className="active">Discover</a>
        <a href="/tips" className="active">Tips</a>
        <a href="/review" className="active">Review</a>
        <a href="/resources" className="active">Resources</a>
        <a href="/contact" className="active">Contact</a>
       
      </div>
      <div className="top-right">
        Welcome, <span>{userName}</span>!
      </div>
    </div>
    
  );
};

export default Navbar;
