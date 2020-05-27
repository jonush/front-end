import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Welcome = () => {
  return (
    <div className='welcome'>
      <h1>Welcome to How-To</h1>
      <h2>Learn a new skill today.</h2>
      
      <div className='welcome-buttons'>
        <Link className='login-button' to='/login'>
          <button
            style={
              {
                background: 'white',
                color: '#1773f6',
                border: '3px solid #1773f6'
              }
            }
          >Log In</button>
        </Link>
        <Link className='signup-button'to='/signup'>
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  )
}

export default Welcome;