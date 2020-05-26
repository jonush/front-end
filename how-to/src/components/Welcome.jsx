import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Welcome = () => {
  return (
    <div className='welcome'>
      <h1>Welcome to How-To</h1>
      <h2>Learn a new skill today.</h2>
      
      <div className='welcome-buttons'>
        <Link to='/login'><button>Log In</button></Link>
        <Link to='/signup'><button style={{background: '#db332a'}}>Sign Up</button></Link>
      </div>
    </div>
  )
}

export default Welcome;