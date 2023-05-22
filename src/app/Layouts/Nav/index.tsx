import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './../../app.scss'
const navs = [
  {
    name: '组件',
    path: '/component',
    key: 'component'
  },
  {
    name: '计划',
    path: '/todolist',
    key: 'todolist'
  },
  {
    name: '简历',
    path: '/resume',
    key: 'resume'
  },
  {
    name: '主题',
    path: '/theme',
    key: 'theme'
  }
]
const Nav: React.FunctionComponent = () => {
  const [isSelect, setIsSelected] = useState<string>('component')
  return (
    <div className={styles['nav']}>
      <div className={styles['nav__left']}>
        <div className={styles['nav__left-img']}></div>
        <div className={styles['nav__left-name']}>name</div>
      </div>
      <div className={styles['nav__right']}>
        {navs.map((item) => {
          return (
            <Link
              to={item['path']}
              className={
                isSelect === item['key']
                  ? styles['nav__right-link--active']
                  : styles['nav__right-link']
              }
              onClick={() => {
                setIsSelected(item['key'])
              }}
              key={item['key']}
            >
              {item['name']}
            </Link>
          )
        })}
        <div className={styles['nav__right-more']}></div>
      </div>
    </div>
  )
}
export default Nav
