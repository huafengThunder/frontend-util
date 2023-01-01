import styles from './index.module.less'
import { getOpenai } from '@/api/openai'
import React, { useState } from 'react'

function FAQs(props){
  return props.data.map((item,index)=>
    <React.Fragment key={index}>
      <section className={styles.question}>
        <span>you:</span>
        {item.Q}
      </section>
      <section className={styles.answer}>
        <span>GPT:</span>
        {item.A}
      </section>
    </React.Fragment>
  )
}

function Layout() {
  const [list,setList] = useState([])
  async function keyup(event) {
    if (event.key === 'Enter' && event.target.value) {
      let value = event.target.value
      event.target.value = ''
      const FQA = {Q:value,A:'内容加载中...'}
      setList([...list,FQA])
      const res = await getOpenai({ prompt: list.map(item=>item.Q?`\n\n${item.Q}`:'')+`\n\n${value}` })
      FQA.A = res.choices[0].text
      setList([...list,FQA])
    }
  }
  return (
    <section className={styles.box}>
      <section className={styles.FAQs}>
        <FAQs data={list}></FAQs>
      </section>
      <div className={styles.search}>
        <input onKeyUp={keyup} className={styles.input} type="text" />
        <button onClick={()=>setList([])} className={styles.button}>
          clear record
        </button>
      </div>
    </section>
  )
}
export default Layout
