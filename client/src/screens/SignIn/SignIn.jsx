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
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
        <h3 className="mb-8 text-3xl text-center">Login</h3>
        <label>
          Username:
          <input
            type='text'
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name='username'
            value={formData.username}
            onChange={handleChange}/>
        </label>
        <label>
          Password:
          <input
            type='password'
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name='password'
            value={formData.password}
          onChange={handleChange} />
      </label>
            <button type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            <br />
            <br />
      <Link to='/signup'>Register</Link>
          </form>
          </div>
      </div>
      </div>
  )
}
