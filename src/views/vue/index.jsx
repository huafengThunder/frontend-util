import React from 'react'
import styles from './index.module.less'
import vueLogo from './imgs/vue-logo.svg'
import piniaLogo from './imgs/pinia-logo.svg'
// import viteLogo from './imgs/vite-logo.svg'
function VueJs() {
  return (
    <React.Fragment>
      <div className={styles.menu}>vue生态</div>
      <div className={styles.content}>
        <a
          href="https://v3.cn.vuejs.org/guide/introduction.html"
          target="_blank"
        >
          <div className={styles.card}>
            <img width="32px" height="32px" src={vueLogo} alt="加载失败" />
            <div>
              <b className={styles.title}>Vue.js</b>
              <p className={styles.describe}>构建用户界面的渐进式框架</p>
            </div>
          </div>
        </a>
        <a href="https://router.vuejs.org/zh/" target="_blank">
          <div className={styles.card}>
            <img width="32px" height="32px" src={vueLogo} alt="加载失败" />
            <div>
              <b className={styles.title}>Vue Router</b>
              <p className={styles.describe}>Vue的官方路由</p>
            </div>
          </div>
        </a>
        <a href="https://vuex.vuejs.org/zh/guide/" target="_blank">
          <div className={styles.card}>
            <img width="32px" height="32px" src={vueLogo} alt="加载失败" />
            <div>
              <b className={styles.title}>Vuex</b>
              <p className={styles.describe}>
                Vue应用程序开发的状态管理模式 + 库
              </p>
            </div>
          </div>
        </a>
        <a href="https://pinia.vuejs.org/zh/" target="_blank">
          <div className={styles.card}>
            <img width="32px" height="32px" src={piniaLogo} alt="加载失败" />
            <div>
              <b className={styles.title}>pinia</b>
              <p className={styles.describe}>拥有组合式API的Vue状态管理库</p>
            </div>
          </div>
        </a>
        <a href="https://cli.vuejs.org/zh/guide/" target="_blank">
          <div className={styles.card}>
            <img width="32px" height="32px" src={vueLogo} alt="加载失败" />
            <div>
              <b className={styles.title}>Vue CLI</b>
              <p className={styles.describe}>基于Vue进行快速开发的完整系统</p>
            </div>
          </div>
        </a>
        {/* <a href="https://cn.vitejs.dev/" target="_blank">
        <div className={styles.card}>
          <img width="32px" height="32px" src={viteLogo} alt="加载失败" />
          <p>
            <b className={styles.title}>Vite</b>
            <p className={styles.describe}>前端工具链开发(提供极速响应)</p>
          </p>
        </div>
      </a> */}
      </div>
    </React.Fragment>
  )
}
export default VueJs
