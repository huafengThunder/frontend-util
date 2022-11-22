import React from 'react'
import styles from './index.module.less'

function Header() {
  return (
    <div className={styles.header}>
      <section className={styles.left}>
        <h1>前端导航</h1>
        <h1 style={{color:'silver'}}>博客</h1>
      </section>
      <section className={styles.center}></section>
      <section className={styles.right}></section>
    </div>
  )
}
export default Header
