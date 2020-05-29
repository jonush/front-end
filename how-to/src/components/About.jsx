import React from 'react';
import { NavLink } from 'react-router-dom';
import '../welcome.css';
import logo from '././../HowTo.png';
import brian from './assets/Brian-Rouse.jpg';
import shawn from './assets/Shawn-James.JPG';
import sandra from './assets/Sandra-Coburn.png';
import cody from './assets/Cody-Morley.jpg';
import heath from './assets/Heath-Scott.png';
import jon from './assets/Jonathon-Hsu.png';
import noah from './assets/noah.jpg';

const About = () => {
  return (
    <>
    <section className="about-main-container">
      <div className="about-card">
        <img src={sandra} alt="Sandra-Coburn"/>
        <h3 className="card-heading">Sandra Coburn - Project Lead</h3>
        <p className="card-text">Sandra Coburn got an Associate Degree in Computer Information Systems in 2000. Took a 20 yr brake to raise 5 kids. Wanted to go back to school to get a bachelors degree but software Engineer son convinced her to join Lambda. He said no upfront money and not unnecessary classes, just coding and that was it. Currently working as a TL to have something to put in her resume. Loving meeting ambitious future software Engineers at Lambda.</p>
      </div>
      <div className="about-card">
        <img src={shawn} alt="Shawn-James"/>
        <h3 className="card-heading">Shawn James - IOS Engineer Unit 3 (IOS16)</h3>
        <p className="card-text">After a childhood of making movies and writing music for his rock band, Shawn spent 2 years learning and speaking fluent Spanish in California and Mexico. He then returned to Utah State University, where he got his Bachelors Degree in Marketing. After a few years of working in Marketing and Advertising at some of the top agencies in the world,  Shawn had noticed that his side hobby of iOS Development had turned into his main interest. He is currently a student at Lambda School and expects to graduate soon and pursue a career in the tech industry.</p>
      </div>
      <div className="about-card">
        <img src={brian} alt="Brian-Rouse"/>
        <h3 className="card-heading">Brian Rouse - IOS Engineer Unit 2 (IOS17)</h3>
        <p className="card-text">Brian Rouse is an OS Engineering student at Lambda. I teach several Swift courses on Udemy and have published a few Apps on the App Store. You can find me Sun-Thurs nights from 10 PM-7 AM at any Ohio Health Hospital currently working as a Lead Data Tech terminating or moving, adding, changing, deleting, (MACD's) ethernet circuits eg. changing code blue pbx telephone lines to digital VoIP lines.</p>
      </div>
      <div className="about-card">
        <img src={cody} alt="Cody-Morley"/>
        <h3 className="card-heading">Cody Morley - IOS Engineer Unit 2 (IOS17)</h3>
        <p className="card-text">In addition to being an XCode-ninja, Cody Morley has worked as a stand up comic for the past 17 years. He began software development in his spare time in 2018 before becoming a Lambda Student. He currently resides in Los Angeles California with his wife Bling and their dog, Cosmo. Photo Credit 2016, Troy Conrad - Comedy Store Hallway Series.</p>
      </div>
      <div className="about-card">
        <img src={heath} alt="Heath-Scott"/>
        <h3 className="card-heading">Heath Scott - Backend Developer (WEB29)</h3>
        <p className="card-text">I am a full stack web developer. I enjoy traveling the US as a digital nomad, seeing what is around the next corner of each, and visiting some interesting places. I enjoy working remotely and seeing what new challenges coding has to offer.</p>
      </div>
      <div className="about-card">
        <img src={jon} alt="Jonathan-Hsu"/>
        <h3 className="card-heading">Jonathan Hsu - WEB React II (WEB30)</h3>
        <p className="card-text">I’m a front-end software engineer currently studying web development at Lambda School. My interests lie in user experience and user interface design.</p>
      </div>
      <div className="about-card">
        <img src={noah} alt="Noah-Green"/>
        <h3 className="card-heading">Noah Green - WEB UI Developer (WEB32)</h3>
        <p className="card-text">Noah Green is a software developer learning web development through Lambda School.</p>
      </div>
    </section>
    <footer className="bottom-content">
      <nav>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/'><img src={logo} alt="HowToMonkey" /></NavLink>
      </nav>
    </footer>
    </>
  )
}

export default About;