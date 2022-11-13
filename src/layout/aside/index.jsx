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
          <p className={styles.active}>工具</p>
          <ul>
            <li onClick={(e) => nemuClick(e, 'Translate')}>翻译</li>
          </ul>
        </li>
        <li>
          <p className={styles.active}>手册</p>
          <ul>
            <li onClick={(e) => nemuClick(e, 'VueJs')}>vue生态</li>
            <li onClick={(e) => nemuClick(e, 'ReactJs')}>react生态</li>
            <li onClick={(e) => nemuClick(e, 'Css')}>css</li>
            <li onClick={(e) => nemuClick(e, 'Html')}>html</li>
            <li onClick={(e) => nemuClick(e, 'Js')}>js</li>
            <li onClick={(e) => nemuClick(e, 'BuildTools')}>构建工具</li>
            <li onClick={(e) => nemuClick(e, 'Compatibility')}>兼容性</li>
            <li onClick={(e) => nemuClick(e, 'Mdn')}>mdn</li>
          </ul>
        </li>
        <li>
          <p>社区</p>
          <ul>
            <li onClick={(e) => nemuClick(e, 'StackOverFlow')}>
              stackoverflow
            </li>
            <li onClick={(e) => nemuClick(e, 'Juejin')}>掘金</li>
            <li onClick={(e) => nemuClick(e, 'Zhihu')}>知乎</li>
            <li onClick={(e) => nemuClick(e, 'Bokeyuan')}>博客园</li>
            <li onClick={(e) => nemuClick(e, 'Csdn')}>csdn</li>
          </ul>
        </li>
        <li>
          <p>仓库</p>
          <ul>
            <li onClick={(e) => nemuClick(e, 'Gitee')}>gitee</li>
            <li onClick={(e) => nemuClick(e, 'Github')}>github</li>
          </ul>
        </li>
        <li>
          <p>UI</p>
          <ul>
            <li onClick={(e) => nemuClick(e, '蓝湖')}>蓝湖</li>
            <li onClick={(e) => nemuClick(e, '包图网')}>包图网</li>
            <li onClick={(e) => nemuClick(e, '摄图网')}>摄图网</li>
          </ul>
        </li>
        <li>
          <p>产品</p>
          <ul>
            <li onClick={(e) => nemuClick(e, 'Figma')}>Figma</li>
          </ul>
        </li>
      </ul>
    </aside>
  )
}
export default Sider
