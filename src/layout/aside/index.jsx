import React from 'react'
import styles from './index.module.less'
import EventBus from '../../utils/event-bus'
function nemuClick(e, name) {
  EventBus.emit('nemuClick', name)
}
function Sider() {
  return (
    <aside className={styles.aside}>
      <ul>
        <li>
          <p className={styles.active}>手册</p>
          <ul>
            <li onClick={(e) => nemuClick(e, 'VueJs')}>vue生态</li>
            <li onClick={(e) => nemuClick(e, 'ReactJs')}>react生态</li>
            <li onClick={(e) => nemuClick(e, 'Html')}>html</li>
            <li onClick={(e) => nemuClick(e, 'Css')}>css</li>
            <li onClick={(e) => nemuClick(e, 'JavaScript')}>js/拓展</li>
            <li onClick={(e) => nemuClick(e, 'BuildTools')}>build/cli</li>
            <li onClick={(e) => nemuClick(e, 'VersionControl')}>
              版本控制工具
            </li>
            <li onClick={(e) => nemuClick(e, 'Compiler')}>编译器</li>
            <li onClick={(e) => nemuClick(e, 'Compatibility')}>兼容性</li>
          </ul>
        </li>
        <li>
          <p onClick={(e) => nemuClick(e, 'FastApp')}>快应用</p>
        </li>
        <li>
          <p onClick={(e) => nemuClick(e, 'CommonTools')}>工具</p>
        </li>
        <li>
          <p onClick={(e) => nemuClick(e, 'Community')}>社区</p>
        </li>
        <li>
          <p onClick={(e) => nemuClick(e, 'Algorithm')}>算法刷题</p>
        </li>
        <li>
          <p onClick={(e) => nemuClick(e, 'CodeEditingTool')}>代码编辑工具</p>
        </li>
        <li>
          <p onClick={(e) => nemuClick(e, 'Repository')}>仓库</p>
        </li>
        <li>
          <p onClick={(e) => nemuClick(e, 'UI')}>UI</p>
        </li>
        <li>
          <p onClick={(e) => nemuClick(e, 'ProductDesign')}>产品</p>
        </li>
      </ul>
    </aside>
  )
}
export default Sider
