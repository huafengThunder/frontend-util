import React from 'react'
import { matchPath, useLocation, useNavigate } from 'react-router-dom'
import MouseOverPopover from '../../components/MouseOverPopover'
import styles from './index.module.less'
import routerMeta from '../../router'

export default function Header() {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const navList = routerMeta.routes[0].children.filter(i => i.cname !== '博客')
    const getMenuPath = item => `/${item.path.replace(/^\/+/, '')}`
    function menuClick(item) {
        navigate(getMenuPath(item))
    }
    function viaClick() {
        // console.log('navList', navList);
    }
    return (
        <div className={styles.header}>
            <section className={styles.left}>
                {navList.length && navList.map((item) => (
                    <h1
                        className={matchPath({ path: getMenuPath(item), end: true }, pathname) ? styles.active : ''}
                        key={item.path}
                        onClick={() => menuClick(item)}
                    >
                        {item.cname}
                    </h1>
                ))}
            </section>
            <section className={styles.right}>
                <MouseOverPopover>
                    <div className={styles.via} onClick={() => viaClick()}></div>
                </MouseOverPopover >
            </section>
        </div>
    )
}
