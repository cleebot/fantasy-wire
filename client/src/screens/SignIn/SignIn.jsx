import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventRegister();
        handleLogin(formData);
      }}>
        <h3>Login</h3>
        <label>
          Username:
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}/>
        </label>
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
