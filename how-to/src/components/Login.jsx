import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
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
      .post('/login', credentials)
      .then(res => {
        console.log('POST request for login', res);
        localStorage.setItem('token', res.data.payload);
        history.push('/dashboard');
      })
      .catch(err => {
        console.log(err.response);
        alert('Login Failed')
      });

    setCredentials({
      username: '',
      password: ''
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>LOGIN</h1>

        <label>
          <input 
            type='text'
            autofocus
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
    </div>
  )
}

export default Login;