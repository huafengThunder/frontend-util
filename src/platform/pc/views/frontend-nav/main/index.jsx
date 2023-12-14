import React from 'react'
import styles from './index.module.less'
import Card from '../../../components/card'
function Main(props) {
  return (
    <section className={styles.main}>
      {<Card list={props.originData} />}
    </section>
  )
}
export default Main
