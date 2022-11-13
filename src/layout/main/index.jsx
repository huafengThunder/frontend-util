import React from 'react'
import styles from './index.module.less'
function Main() {
  return (
    <section className={styles.main}>
      <div className={styles.menu}>vue生态</div>
      <div className={styles.content}>
        <a
          href="https://v3.cn.vuejs.org/guide/introduction.html"
          target="_blank"
        >
          <div className={styles.card}>
            <svg
              class="logo"
              viewBox="0 0 128 128"
              width="32"
              height="32"
              data-v-97393f76=""
            >
              <path
                fill="#42b883"
                d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
                data-v-97393f76=""
              ></path>
              <path
                fill="#35495e"
                d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
                data-v-97393f76=""
              ></path>
            </svg>
            <p>
              <b className={styles.title}>Vue.js</b>
              <p className={styles.describe}>构建用户界面的渐进式框架</p>
            </p>
          </div>
        </a>
      </div>
    </section>
  )
}
export default Main
