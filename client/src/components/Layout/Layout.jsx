import React from 'react'
import { Link } from 'react-router-dom';
// import Footer from "../Footer/Footer";
// import Nav from '../Nav/Nav';


export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    // <Nav />
    <div>
    <header>
    <Link to='/'>Fantasy Wire</Link>
      <div>
      {
        currentUser ? (
          <div>
            <p>Welcome, {currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
            <Link to='/signin'>Sign In</Link>
        )
          }
          <br />
        {currentUser && (
          <div>
        <Link to='/articles'>Articles</Link>
      </div>
        )}
      {props.children}
      </div>
    </header>
    <footer></footer>
    </div>
  )
}
