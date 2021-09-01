import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <nav>
      <div>
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
      </div>
      </nav>
    </div>
  )
}
