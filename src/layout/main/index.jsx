import React, { useState, useEffect } from 'react'
import styles from './index.module.less'
import EventBus from '../../utils/event-bus'
import VueJs from '../../views/vue/index'
import Translate from '../../views/translate/index'
function Main() {
  const [curMenu, setCurMenu] = useState('VueJs')
  useEffect(() => {
    EventBus.addListener('nemuClick', async (msgType) => {
      setCurMenu(msgType)
    })
  }, [])
  return (
    <section className={styles.main}>
      {curMenu === 'VueJs' ? <VueJs /> : <React.Fragment />}
      {curMenu === 'Translate' ? <Translate /> : <React.Fragment />}
    </section>
  )
}
export default Main
