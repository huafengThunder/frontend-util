import React from 'react'
import styles from './index.module.less'

// 转化数据，先固定按两级菜单组成树结构
function generatorMenu(res) {
  const pids = [...new Set(res.map(i => i.pid))].reverse()
  const menus = pids.map(i => ({
    pid: i, children: res.reduce((acc, cur) => {
      if (i === cur.pid && !acc.includes(cur.type)) {
        acc.push(cur.type)
        return acc
      } else {
        return acc
      }
    }, [])
  }))
  return menus
}

function Sider(props) {
  const { originData, curMenu, setCurMenu } = props
  function menuClick(name) {
    setCurMenu(name)
  }
  return (
    <aside className={styles.aside}>
      <ul className={styles.navUl}>
        {generatorMenu(originData).map((item, index) => (
          <li key={index}>
            {item.pid ? <h1 onClick={() => menuClick(item.children[0])}>{item.pid}</h1> : null}
            <ul>
              {item.children.map((child, childIndex) => (
                <li key={childIndex} className={curMenu === child ? styles.active : ''} onClick={() => menuClick(child)}>{child}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  )
}
export default Sider
