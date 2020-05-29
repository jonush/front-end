import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '././../HowTo.png';
import '../welcome.css';

const Welcome = () => {
  return (
    <section className="big-boi">

      <section className="main-container">
        <section className="top-content">
          <div className='top-content-div'>
            <h3 className='heading-text'>HowTo</h3>
            <p className='text-container'>We'll throw some old gray clouds in here just sneaking around and having fun. What the devil. We'll paint one happy little tree right here. Let's give him a friend too. Everybody needs a friend.</p>
          </div>
          <div className='top-content-div'>
            <h3 className='heading-text'>Lorem</h3>
            <p className='text-container'>We'll throw some old gray clouds in here just sneaking around and having fun. What the devil. We'll paint one happy little tree right here. Let's give him a friend too. Everybody needs a friend.</p>
          </div>
        </section>

        <section className="middle-content">
          <div className='middle-content-div'>
            <h2 className='heading-text'>
              Lorem
            </h2>
            <p className="text-container">
              We'll throw some old gray clouds in here just sneaking around and having fun. What the devil. We'll paint one happy little tree right here. Let's give him a friend too. Everybody needs a friend.
              </p>
          </div>
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
          </section>
        </section>
      <footer className="bottom-content">
        <nav>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/'><img src={logo} alt="HowToMonkey" /></NavLink>
        </nav>
      </footer>
    </section>
  )
}

export default Welcome;