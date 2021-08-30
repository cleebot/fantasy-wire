import React from 'react'
import { Link } from 'react-router-dom';

export default function Layout(props) {
  return (
    <header>
     <h1>Fantasy Wire</h1>
      <Link to='/signin'>Sign In</Link>
      <Link to='/signup'>Sign Up</Link>
      <hr />
      {props.children}
    </header>
  )
}
