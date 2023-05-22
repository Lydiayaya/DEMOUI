import React from 'react'

import styles from './index.scss'
import layout from './../layout.scss'

const Component: React.FC = () => {
  return (
    <div className={layout['wrapper']}>
      <div className={layout['wrapper__slider']}>
        <div>组件</div>
      </div>
      <div className={layout['wrapper__content']}></div>
    </div>
  )
}
export default Component
