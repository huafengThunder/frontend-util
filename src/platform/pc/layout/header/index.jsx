import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MouseOverPopover from '../../components/MouseOverPopover'
import styles from './index.module.less'
import routerMeta from '../../router'

export default function Header() {
    const navigate = useNavigate()
    const navList = routerMeta.routes[0].children.filter(i => i.cname !== '博客')
    const [curList, setCurList] = useState(navList[0])
    function menuClick(item) {
        setCurList(item)
        navigate(item.path)
    }
    function viaClick() {
        // console.log('navList', navList);
        // setCurList(null)
    }
    return (
        <div className={styles.header}>
            <section className={styles.left}>
                {navList.length && navList.map((item) => (
                    <h1
                        className={item.path === curList.path ? styles.active : ''}
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