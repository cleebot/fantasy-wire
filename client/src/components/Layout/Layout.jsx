import React from 'react'
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer";


export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <h1>Fantasy Wire</h1>
      {
        currentUser ? (
          <div>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
            <Link to='/signin'>Sign In</Link>
        )
      }
      <hr />
        {currentUser && (
          <div>
        <Link to='/articles'>Articles</Link>
      </div>
        )}
      {props.children}
    </header>
  )
}
