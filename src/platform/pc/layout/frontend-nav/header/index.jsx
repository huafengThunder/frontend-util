import React, { useState } from 'react'
import styles from './index.module.less'

function Header() {
  const list = ['前端导航', '博客']
  const [curList, setCurList] = useState(list[0])
  function menuClick(item) {
    setCurList(item)
  }
  return (
    <div className={styles.header}>
      <section className={styles.left}>
        {list.map((item) => (
          <h1
            className={item === curList ? styles.active : ''}
            key={item}
            onClick={() => menuClick(item)}
          >
            {item}
          </h1>
        ))}
      </section>
      <section className={styles.center}></section>
      <section className={styles.right}></section>
    </div>
  )
}
export default Header
