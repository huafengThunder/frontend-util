import React from 'react'
import Aside from './aside'
import Main from './main'
import styles from './index.module.less'
function Layout() {
  return (
    <React.Fragment>
      <section className={styles.layout}>
        <Aside />
        <Main />
      </section>
    </React.Fragment>
  )
}
export default Layout
