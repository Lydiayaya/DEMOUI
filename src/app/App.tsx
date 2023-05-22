import React from 'react'
import Layout from './Layouts'

import styles from './app.scss'
const App: React.FunctionComponent = () => {
  return (
    <div className={styles.content}>
      <Layout></Layout>
    </div>
  )
}
export default App
