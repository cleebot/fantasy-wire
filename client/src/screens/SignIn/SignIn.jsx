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
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
        <h3 class="mb-8 text-3xl text-center">Login</h3>
        <label>
          Username:
          <input
            type='text'
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name='username'
            value={formData.username}
            onChange={handleChange}/>
        </label>
        <label>
          Password:
          <input
            type='password'
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name='password'
            value={formData.password}
          onChange={handleChange} />
      </label>
            <button type="submit"
            class="w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1">Submit</button>
      <Link to='/signup'>Register</Link>
          </form>
          </div>
      </div>
      </div>
  )
}
