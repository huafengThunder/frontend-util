import React from 'react'
import Aside from './aside'
import Main from './main'
import styles from './index.module.less'
function Layout() {
  return (
    <React.Fragment>
      <div className={styles.layout}>
        <Aside />
        <Main />
      </div>
    </React.Fragment>
  )
}
export default Layout
