import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MouseOverPopover from '../../components/MouseOverPopover'
import styles from './index.module.less'

function openLogin() {
    alert('等待完善')
}
export default function Header() {
    const navigate = useNavigate()
    const list = ['前端导航', 'chatGPT']
    const [curList, setCurList] = useState(list[0])
    function menuClick(item) {
        setCurList(item)
        if (item === '前端导航') {
            navigate('/')
        }
        if (item === 'chatGPT') {
            navigate('/chatGPT')
        }
    }
    function viaClick() {
        setCurList('')
    }
    return (
        <div className={styles.header}>
            <section className={styles.left}>
                {list.map((item) => (
                    <h1
                        className={item === curList ? styles.active : ''}
                        key={item}
                        onClick={() => menuClick(item)}
                    >
                        {item}
                    </h1>
                ))}
            </section>
            <section className={styles.right}>
                <MouseOverPopover>
                    <div className={styles.via} onClick={() => viaClick()}></div>
                </MouseOverPopover >
                <button onClick={() => openLogin()}>登录</button>
            </section>
        </div>
    )
}