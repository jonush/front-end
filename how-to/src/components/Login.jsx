import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';


const Login = ({ loggedIn, setLoggedIn }) => {
  const history = useHistory();

  const [ credentials, setCredentials ] = useState({
    username: '',
    password: ''
  })

  const handleInput = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('https://how-to-diy.herokuapp.com/api/auth/login', credentials)
      .then(res => {
        console.log('POST request for login', res);
        localStorage.setItem('token', res.data.payload);
        setLoggedIn(!loggedIn);
        history.push('/dashboard');
      })
      .catch(err => {
        console.log(err.response);
        alert('Login Failed')
      });

    setCredentials({
      Email: '',
      Password: ''
    })
  }

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <h1>LOGIN</h1>

        <label>
          <input 
            type='text'
            //autoFocus
            name='username'
            value={credentials.username}
            onChange={handleInput}
            placeholder='Username'
          />
        </label>

        <label>
          <input 
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleInput}
            placeholder='Password'
          />
        </label>

        <button onSubmit={handleSubmit}>Log In</button>
      </form>
      
      <h3>Don't have an account? <Link to='/signup'>Sign up</Link></h3>
    </div>
  )
}

export default Login;