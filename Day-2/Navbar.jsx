import React from 'react';
import './Navbar.css'; // You can create a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./src/images/img3-01.png" alt="Company Logo" />
      </div>
      <div className="links">
        <div className='classcolor'>
        <a href="/">Home</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
        <a href="/login">Login</a>
     </div>
      </div>
    </nav>
  );
}

export default Navbar;