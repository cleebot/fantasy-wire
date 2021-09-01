import React from 'react'
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div>
      Caleb Lee
      <a href="https://github.com/cleebot" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="git" /></a>
      <a href="https://linkedin.com/in/caleblee92" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="git"/></a>
    </div>
  )
}
