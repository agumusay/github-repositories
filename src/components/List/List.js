import React from 'react'
import './List.scss'

const List = (props) => {
  return <ul className="list-container">{props.children}</ul>
}

export default List
