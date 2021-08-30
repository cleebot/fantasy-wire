import React from 'react'
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div>
      <form>
        <h3>Login</h3>
        <label>
          Username:
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
