import React from 'react'
import styles from './index.module.less'
function Sider() {
  return (
    <aside className={styles.aside}>
      <ul>
        <li>
          <p className={styles.active}>手册</p>
          <ul>
            <li className={styles.active}>vue生态</li>
            <li>react生态</li>
            <li>css</li>
            <li>html</li>
            <li>js</li>
            <li>打包工具</li>
            <li>兼容性</li>
            <li>mdn</li>
          </ul>
        </li>
        <li>
          <p>社区</p>
          <ul>
            <li>stackoverflow</li>
            <li>掘金</li>
            <li>知乎</li>
            <li>博客园</li>
            <li>csdn</li>
          </ul>
        </li>
        <li>
          <p>仓库</p>
          <ul>
            <li>gitee</li>
            <li>github</li>
          </ul>
        </li>
        <li>
          <p>UI</p>
          <ul>
            <li>蓝湖</li>
            <li>包图网</li>
            <li>摄图网</li>
          </ul>
        </li>
        <li>
          <p>产品</p>
          <ul>
            <li>Figma</li>
          </ul>
        </li>
      </ul>
    </aside>
  )
}
export default Sider
