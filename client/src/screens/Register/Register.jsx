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
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}>
        <h3>Register</h3>
        <label>
          Username:
          <input />
        </label>
        <label>
          Email:
          <input />
        </label>
        <label>
          Password:
          <input />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
