import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>How-To</NavLink>

      <div>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;