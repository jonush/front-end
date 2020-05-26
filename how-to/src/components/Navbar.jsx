import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../HowTo.png';
import '../App.css';

const Navbar = () => {
  return (
    <nav>
      <NavLink className='home-link' to='/'>
        <img src={logo} className='logo' alt='logo'></img>
      </NavLink>

      <div className='nav-links'>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;