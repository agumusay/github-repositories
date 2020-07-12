import React, { useState, useEffect } from 'react'
import fetchUrl from '../../helpers/fetchUrl'

import './Card.scss'
import moment from 'moment'
const Card = ({ repo }) => {
  const [langs, setLangs] = useState('')
  const name = repo.full_name.split('/')[1]
  useEffect(() => {
    fetchUrl(repo.languages_url).then((data) => setLangs(Object.entries(data)))
  }, [repo.languages_url])

  const languages =
    langs &&
    langs.map((lang, i) => {
      return (
        <div key={i}>
          <span style={{ fontWeight: 'bold' }}>{lang[0]}</span> :
          <div>{parseFloat(lang[1] / 1000).toFixed(1)}k</div>
        </div>
      )
    })

  return (
    <li className="list-item" key={repo.id}>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <div className="title">
          <h3>{name.toUpperCase()}</h3>
        </div>
        <div className="date">
          <p>
            <span style={{ fontWeight: 'bold' }}>Created: </span>
            {moment(repo.created_at).fromNow()}
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Updated: </span>
            {moment(repo.updated_at).fromNow()}
          </p>
        </div>
        <div className="languages">{languages}</div>
        <div className="description">
          <p>
            {repo.description ? repo.description : 'No Description Provided'}
          </p>
        </div>
      </a>
    </li>
  )
}

export default Card
