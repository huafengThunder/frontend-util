import React, { useState, useEffect } from 'react'
import styles from './index.module.less'
import EventBus from '../../utils/event-bus'
import VueJs from '../../views/vue/index'
import ReactJs from '../../views/react/index'
import Html from '../../views/html/index'
import Css from '../../views/css/index'
import JavaScript from '../../views/javascript/index'
import CommonTools from '../../views/common-tools/index'
import BuildTools from '../../views/build-tools/index'
import Compatibility from '../../views/compatibility/index'
import Community from '../../views/community/index'
import Algorithm from '../../views/algorithm/index'
import Repository from '../../views/repository/index'
import CodeEditingTool from '../../views/code-editing-tool/index'
import UI from '../../views/ui/index'
import ProductDesign from '../../views/product-design/index'
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
      {curMenu === 'ReactJs' ? <ReactJs /> : <React.Fragment />}
      {curMenu === 'Html' ? <Html /> : <React.Fragment />}
      {curMenu === 'Css' ? <Css /> : <React.Fragment />}
      {curMenu === 'JavaScript' ? <JavaScript /> : <React.Fragment />}
      {curMenu === 'CommonTools' ? <CommonTools /> : <React.Fragment />}
      {curMenu === 'Compatibility' ? <Compatibility /> : <React.Fragment />}
      {curMenu === 'BuildTools' ? <BuildTools /> : <React.Fragment />}
      {curMenu === 'Community' ? <Community /> : <React.Fragment />}
      {curMenu === 'Algorithm' ? <Algorithm /> : <React.Fragment />}
      {curMenu === 'Repository' ? <Repository /> : <React.Fragment />}
      {curMenu === 'CodeEditingTool' ? <CodeEditingTool /> : <React.Fragment />}
      {curMenu === 'UI' ? <UI /> : <React.Fragment />}
      {curMenu === 'ProductDesign' ? <ProductDesign /> : <React.Fragment />}
    </section>
  )
}
export default Main
