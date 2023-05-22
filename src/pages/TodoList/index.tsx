import React from 'react'
import layout from './../layout.scss'
const TodoList: React.FC = () => {
  return (
    <div className={layout['wrapper']}>
      <div className={layout['wrapper__slider']}>12</div>
      <div className={layout['wrapper__content']}>34</div>
    </div>
  )
}
export default TodoList
