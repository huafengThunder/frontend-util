import React from 'react'
import Aside from './aside'
import Main from './main'
// import Header from './header'
import styles from './index.module.less'
function Layout() {
  return (
    <div className={styles.layout}>
      {/* <Header /> */}
      <Aside />
      <Main />
    </div>
  )
}
export default Layout
