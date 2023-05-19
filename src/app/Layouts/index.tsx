import React from 'react'

import { Routes, BrowserRouter, Route } from 'react-router-dom'
import TodoList from '@pages/TodoList'
import Component from '@pages/Component'
import Resume from '@pages/resume'
import Theme from '@pages/theme/theme'
import Nav from './Nav'

const Layout: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" Component={Component} />
          <Route path="/todolist" Component={TodoList} />
          <Route path="/resume" Component={Resume} />
          <Route path="/theme" Component={Theme} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default Layout
