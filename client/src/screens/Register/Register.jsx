import React from 'react'
import { useState } from 'react';

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const { handleRegister } = props;

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
      <form onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}>
        <h3 className="mb-8 text-3xl text-center">Register</h3>
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
          Email:
          <input
            type='text'
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name='email'
            value={formData.email}
            onChange={handleChange}/>
        </label>
        <label>
          Password:
          <input
            type='password'
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name='password'
            value={formData.password}
            onChange={handleChange}/>
        </label>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
      </form>
        </div>
        </div>
        </div>
  )
}
