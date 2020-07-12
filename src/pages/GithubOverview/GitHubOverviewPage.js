import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import Header from '../../components/Header/Header'
import List from '../../components/List/List'
import Card from '../../components/Card/Card'
import './GithubOverviewPage.scss'

const GitHubOverview = ({ location }) => {
  const [user, setUser] = useState('')
  const [repos, setRepos] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setUser(location.state.gihtubUser)
    setRepos(location.state.userRepos)
    const myTimeOut = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => {
      clearTimeout(myTimeOut)
    }
  }, [location.state.gihtubUser, location.state.userRepos])

  return (
    <div className="overview">
      {loading ? (
        <div className="loader">
          <div className="loading">
            <div className="loading-bg">
              <FontAwesomeIcon
                icon={faGithubSquare}
                className="loading-bg-icon"
              />
            </div>
          </div>
          <h2>LOADING</h2>
        </div>
      ) : (
        <>
          <Header user={user} />
          <List>
            {repos.map((repo) => {
              return <Card repo={repo} key={repo.id} />
            })}
          </List>
        </>
      )}
    </div>
  )
}

export default GitHubOverview
