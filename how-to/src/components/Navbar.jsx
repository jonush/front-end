import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../HowTo.png';
import '../App.css';

const Navbar = ({ loggedIn, setLoggedIn }) => {

  const logOut = () => {
    localStorage.removeItem('token');
    setLoggedIn(!loggedIn);
  }

  return (
    <nav>
      <NavLink className='home-link' to='/'>
        <img src={logo} className='logo' alt='logo'></img>
      </NavLink>

      <div className='nav-links'>
    {/* <NavLink to='/about'>About</NavLink> */}
        {
          loggedIn === true ? 
          <NavLink to='/login' onClick={logOut}>Logout</NavLink> :
          <NavLink to='/login'>Login</NavLink>
        }
      </div>
    </nav>
  )
}

export default Navbar;