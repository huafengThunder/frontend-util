import styles from './index.module.less'
import { getOpenai } from '@/api/openai'
import React, { useState } from 'react'

function Question(props) {
  if (props.data.lentgh < 1) return <></>
  return (
    <section className={styles.question}>
      <span>you:</span>
      {props.data.map((item,index) => (
        <span key={index}>{item}</span>
      ))}
    </section>
  )
}
function Answer(props) {
  if (props.data.lentgh<1) return <></>
  return (
    <section className={styles.answer}>
      <span>GPT:</span>
      {props.data.map(item=>item)}
    </section>
  )
}
function Layout() {
  const [inputVal, setInputVal] = useState([])
  const [answer, setAnswer] = useState([])
  async function keyup(event) {
    if (event.key === 'Enter' && event.target.value) {
      let value = event.target.value
      setInputVal([value])
      event.target.value = ''
      const res = await getOpenai({ prompt: value })
      setAnswer([res[0].text])
    }
  }
  function clearRecord(){
    setInputVal([])
    setAnswer([])
  }
  return (
    <React.Fragment>
      <Question data={inputVal} />
      <Answer data={answer} />
      <div className={styles.search}>
        <input onKeyUp={keyup} className={styles.input} type="text" />
        <button onClick={clearRecord} className={styles.button}>
          clear record
        </button>
      </div>
    </React.Fragment>
  )
}
export default Layout
