import React, { useState } from 'react';
import "../page/cs/navbar.css";
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
const Navbar = () => {
  return (
    <nav>
      <input type="checkbox" id="check"/>
      <label for="check" className='checkbtn'>
        <ViewHeadlineIcon/>
      </label>
      <label className="logo">DesignX</label>
      <ul>
        <li><a className="active" href="/">Home</a></li>
        <li><a href="/signup">Signup</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="#">Feedback</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;