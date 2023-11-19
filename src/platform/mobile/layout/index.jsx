import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import MouseOverPopover from '../components/MouseOverPopover'
import routerMeta from '../router'
import styles from './index.module.less'

function Layout() {
  const navigate = useNavigate()
  const navList = routerMeta.routes[0].children.filter(i => i.cname !== '博客')
  const [curList, setCurList] = useState(navList[0])
  function menuClick(item) {
    setCurList(item)
    navigate(item.path)
  }
  function viaClick() {
    setCurList(null)
  }
  return (
    <React.Fragment>
      <div className={styles.header}>
        <section className={styles.left}>
          {navList.map((item) => (
            <h1
              className={item.path === curList.path ? styles.active : ''}
              key={item.path}
              onClick={() => menuClick(item)}
            >
              {item.cname}
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
