import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    <div>
        <ul>
        <li><Link to="/Post/1">Post1</Link></li>
        <li><Link to="/Post/2">Post2</Link></li>
        <li><Link to="/Post/3">Post3</Link></li>
      </ul>
      <Link to="/Post/New">NewPost</Link>
      <Outlet />
    </div>
  )
}

export default PostLayout