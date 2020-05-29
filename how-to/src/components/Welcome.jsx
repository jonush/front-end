import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '././../HowTo.png';
import '../welcome.css';

const Welcome = () => {
  return (
    <section class="big-boi">

      <section class="main-container">
        <section class="top-content">
          <div class='top-content-div'>
            <h3 class='heading-text'>HowTo</h3>
            <p class='text-container'>We'll throw some old gray clouds in here just sneaking around and having fun. What the devil. We'll paint one happy little tree right here. Let's give him a friend too. Everybody needs a friend.</p>
          </div>
          <div class='top-content-div'>
            <h3 class='heading-text'>Lorem</h3>
            <p class='text-container'>We'll throw some old gray clouds in here just sneaking around and having fun. What the devil. We'll paint one happy little tree right here. Let's give him a friend too. Everybody needs a friend.</p>
          </div>
        </section>

        <section class="middle-content">
          <div class='middle-content-div'>
            <h2 class='heading-text'>
              Lorem
            </h2>
            <p class="text-container">
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
      <footer class="bottom-content">
        <nav>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/'><img src={logo} alt="HowToMonkey" /></NavLink>
        </nav>
      </footer>
    </section>
  )
}

export default Welcome;