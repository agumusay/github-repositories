import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import './Header.scss'
const Header = ({ user }) => {
  return (
    <header className="header">
      <section className="logo-container">
        <div className="icon-container">
          <div className="icon-bg">
            <FontAwesomeIcon icon={faGithubSquare} className="icon" />
          </div>
        </div>
        <h1>Neo Repo</h1>
      </section>
      <div className="bar">
        <div className="bar-in"></div>
      </div>
      <section className="user">
        <h3>{user.login}</h3>
        <div className="img-container">
          <img src={user.avatar_url} alt="" className="avatar" />
        </div>
      </section>
    </header>
  )
}

export default Header
