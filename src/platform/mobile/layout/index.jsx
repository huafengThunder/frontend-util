import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import MouseOverPopover from '../components/MouseOverPopover'
import styles from './index.module.less'

function Layout() {
  const navigate = useNavigate()
  const list = ['前端导航']
  const [curList, setCurList] = useState(list[0])
  function menuClick(item) {
    setCurList(item)
    if (item === '前端导航') {
      navigate('/frontend-nav')
    }
    if (item === '前端导航') {
      navigate('/')
    }
  }
  function viaClick(){
    setCurList('')
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
          <MouseOverPopover>
            <div className={styles.via} onClick={() => viaClick()}></div>
          </MouseOverPopover >
        </section>
      </div>
      <Outlet />
    </React.Fragment>
  )
}
export default Layout
