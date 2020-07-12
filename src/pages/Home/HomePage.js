import React, { useState } from 'react'
import fetchUrl from '../../helpers/fetchUrl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

import './HomePage.scss'

const HomePage = ({ history }) => {
  const [userName, setUserName] = useState('')

  const baseUrl = 'https://api.github.com/users/'

  const onChangeHandler = (e) => {
    setUserName(e.target.value)
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const userResponse = fetchUrl(baseUrl + userName)
    const userRepos = fetchUrl(baseUrl + userName + '/repos')

    history.push({
      pathname: userName,
      state: { gihtubUser: await userResponse, userRepos: await userRepos },
    })
  }

  return (
    <div className="home">
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="header">
          <div className="icon-container">
            <div className="icon-bg">
              <FontAwesomeIcon icon={faGithubSquare} className="icon" />
            </div>
          </div>
          <h1 className="header-title">Neo Repo</h1>
        </div>
        <div className="input">
          <input
            type="text"
            className="input-text"
            placeholder="Please enter Github Username"
            onChange={onChangeHandler}
          />
          <button className="input-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default HomePage
