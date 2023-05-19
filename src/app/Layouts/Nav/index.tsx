import React from 'react'
import { Link } from 'react-router-dom'

const Nav: React.FunctionComponent = () => {
  return (
    <div>
      <Link to="/">组件</Link>
      <Link to="/todolist">计划</Link>
      <Link to="/resume">简历</Link>
      <Link to="/theme">主题</Link>
    </div>
  )
}
export default Nav
