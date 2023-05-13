import React from 'react'
import styles from './index.module.less'
import { isLinkBase64 } from '@/utils/common'
export default function Card (props) {
  return (
    <React.Fragment>
      <div className={styles.menu}>{props.data?.title}</div>
      <div className={styles.content}>
        {props.data?.card.map((item, index) => {
          let noText = isLinkBase64(item.logo)
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
                  src={item.logo}
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
    </React.Fragment>
  )
}

