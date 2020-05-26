import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to How-To</h1>
      <h2>Learn a new skill today.</h2>
      <Link to='/login'><button>Log In</button></Link>
      <Link to='/signup'><button>Sign Up</button></Link>
    </div>
  )
}

export default Welcome;