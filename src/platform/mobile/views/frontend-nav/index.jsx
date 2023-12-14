import React, { useEffect, useState } from 'react'
import Aside from './aside'
import Main from './main'
import styles from './index.module.less'
import { getMenus } from '@/api/menu'

function Layout() {
  const [curMenu, setCurMenu] = useState('常用工具')
  const [originData, setOriginData] = useState([])
  useEffect(() => {
    async function setMenusDate() {
      const res = await getMenus()
      setOriginData(res)
    }
    setMenusDate()
  }, [])
  return (
    <React.Fragment>
      <section className={styles.layout}>
        <Aside originData={originData} curMenu={curMenu} setCurMenu={setCurMenu} />
        <Main originData={originData.filter(i => i.type === curMenu)} />
      </section>
    </React.Fragment>
  )
}
export default Layout
