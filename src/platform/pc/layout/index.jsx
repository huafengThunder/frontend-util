import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styles from './index.module.less'

function Layout() {
  const navigate = useNavigate()
  const list = ['前端导航', 'chatGPT']
  const [curList, setCurList] = useState(list[0])
  function menuClick(item) {
    setCurList(item)
    if (item === '前端导航') {
      navigate('/')
    }
    if (item === 'chatGPT') {
      navigate('/chatGPT')
    }
  }
  function viaClick(){
    setCurList('')
    navigate('/blog')
  }
  return (
    <React.Fragment>
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
        <section className={styles.right}>
          <div className={styles.via} onClick={() => viaClick()}></div>
        </section>
      </div>
      <Outlet />
    </React.Fragment>
  )
}
export default Layout
