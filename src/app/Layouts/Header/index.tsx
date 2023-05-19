import React from 'react'
import { Routes, Link, BrowserRouter, Router, Route } from 'react-router-dom'
import TodoList from '@pages/TodoList'
import Component from '@pages/Component'

const Header: React.FC = () => {
  return (
    <BrowserRouter>
      <Link to="/">首页</Link>
      <Link to="user">个人中心</Link>
      <Routes>
        <Route path="/" Component={TodoList} />
        <Route path="/user" Component={Component} />
      </Routes>
    </BrowserRouter>
  )
}
export default Header
