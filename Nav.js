import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <h1>Nav</h1>
      <ul>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/Head">Header</Link></li>
        <li><Link to="/Post">Postpage</Link></li>
      </ul>
      </div>
  )
}

export default Nav