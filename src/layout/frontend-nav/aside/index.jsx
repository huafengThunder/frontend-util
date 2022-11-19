import React, { Fragment, useState } from 'react'
import styles from './index.module.less'
import Data from '../data'
import EventBus from '../../../utils/event-bus'

function reveresFlat(data) {
  const menu = new Map()
  const menuArr = []
  data.forEach((element, key) => {
    if (element.menu) {
      menuArr.push({
        title: element.title,
        card: element.card,
        eventName: key,
      })
      menu.set(element.menu, menuArr)
    } else {
      menu.set(element.title, {
        title: element.title,
        card: element.card,
        eventName: key,
      })
    }
  })
  return menu
}

function Sider() {
  const [activeMenu, setActiveMenu] = useState('VueJs')
  const arr = reveresFlat(Data)
  const Li = []
  arr.forEach((value, key) => {
    Li.push(
      <li key={key}>
        <p
          className={
            value?.eventName === activeMenu ||
            (Array.isArray(value) &&
              value.some((item) => item.eventName === activeMenu))
              ? styles.active
              : ''
          }
          onClick={(e) => nemuClick(e, value.eventName || value[0].eventName)}
        >
          {key}
        </p>
        {Array.isArray(value) ? (
          <ul>
            {value.map((item) => (
              <li
                key={item.title}
                className={item.eventName === activeMenu ? styles.active : ''}
                onClick={(e) => nemuClick(e, item.eventName)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        ) : (
          <Fragment />
        )}
      </li>
    )
  })
  function nemuClick(e, name) {
    EventBus.emit('nemuClick', name)
    setActiveMenu(name)
  }
  return (
    <aside className={styles.aside}>
      <ul>{Li}</ul>
    </aside>
  )
}
export default Sider
