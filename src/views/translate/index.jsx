import React from 'react'
import styles from './index.module.less'
import youdaoLogo from './imgs/youdao-logo.jpg'
function VueJs() {
  return (
    <React.Fragment>
      <div className={styles.menu}>翻译</div>
      <div className={styles.content}>
        <a
          href="https://www.youdao.com/"
          target="_blank"
          className={styles.link}
        >
          <div className={styles.card}>
            <img width="32px" height="32px" src={youdaoLogo} alt="加载失败" />
            <div>
              <b className={styles.title}>有道词典</b>
              <p className={styles.describe}>
                集成中、英、日、韩、法多语种词典
              </p>
            </div>
          </div>
        </a>
      </div>
    </React.Fragment>
  )
}
export default VueJs
