import React from 'react'
import Layout from './Layouts'

import styles from './app.scss'
const App: React.FunctionComponent = () => {
  console.log(styles)
  return (
    <div className={styles.content}>
      1111111111
      <Layout></Layout>
    </div>
  )
}
export default App
