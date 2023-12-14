import React from 'react'
import styles from './index.module.less'
import { isLinkBase64 } from '@/utils/common'
export default function Card(props) {
  return (
    <React.Fragment>
      <div className={styles.menu}>{props.list[0]?.type}</div>
      <div className={styles.content}>
        {props.list?.map((item, index) => {
          let noText = item.logo.startsWith('imgs') || item.logo.startsWith('public') || isLinkBase64(item.logo)
          let src = null
          if (item.logo.startsWith('imgs')) {
            src = require('@/static/frontend-nav/' + item.logo)
          }
          if (item.logo.startsWith('public')) {
            src = require('../../../../../public/imgs/logo.webp')
          }
          if (isLinkBase64(item.logo)) {
            src = item.logo
          }
          return (
            <a
              href={item.href}
              target="_blank"
              className={styles.link}
              key={index}
            >
              <div className={styles.card}>
                {noText ? <img
                  width="32px"
                  height="32px"
                  src={src}
                /> : <p>{item.logo}</p>}
                <div>
                  <b className={styles.title}>{item.title}</b>
                  <p className={styles.describe}>{item.describe}</p>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </React.Fragment >
  )
}

