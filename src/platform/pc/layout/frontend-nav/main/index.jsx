import React, { useState, useEffect } from 'react'
import styles from './index.module.less'
import EventBus from '@/utils/event-bus'
import Card from '../../../components/card'
import Data from '@/static/frontend-nav/menu-data'
function Main() {
  const [curMenu, setCurMenu] = useState('VueJs')
  const data = Data
  useEffect(() => {
    EventBus.addListener('nemuClick', async (msgType) => {
      setCurMenu(msgType)
    })
  }, [])

  return (
    <section className={styles.main}>
      {<Card data={data.get(curMenu)} />}
    </section>
  )
}
export default Main
