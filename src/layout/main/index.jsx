import React, { useState, useEffect } from 'react'
import styles from './index.module.less'
import EventBus from '../../utils/event-bus'
import VueJs from '../../views/vue/index'
import ReactJs from '../../views/react/index'
import Translate from '../../views/translate/index'
import BuildTools from '../../views/build-tools/index'
function Main() {
  const [curMenu, setCurMenu] = useState('VueJs')
  useEffect(() => {
    EventBus.addListener('nemuClick', async (msgType) => {
      setCurMenu(msgType)
    })
  }, [])
  return (
    <section className={styles.main}>
      {curMenu === 'Translate' ? <Translate /> : <React.Fragment />}
      {curMenu === 'VueJs' ? <VueJs /> : <React.Fragment />}
      {curMenu === 'ReactJs' ? <ReactJs /> : <React.Fragment />}
      {curMenu === 'BuildTools' ? <BuildTools /> : <React.Fragment />}
    </section>
  )
}
export default Main
