import React from 'react'
import styles from './index.module.less'
export default function Card(props) {
  return (
    <React.Fragment>
      <div className={styles.menu}>{props.data.menu}</div>
      <div className={styles.content}>
        {props.data.card.map((item,index) => {
          return (
            <a
              href={item.href}
              target="_blank"
              className={styles.link}
              key={index}
            >
              <div className={styles.card}>
                <img width="32px" height="32px" src={item.logo} />
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

