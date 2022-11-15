import React from 'react'
import Card from '../../components/card'
import html5Logo from './imgs/html5-logo.png'
function Css() {
  const data = {
    menu: 'html',
    card: [
      {
        logo: html5Logo,
        href: 'https://www.w3school.com.cn/html/html5_intro.asp',
        title: 'html5',
        describe: 'html5手册',
      },
    ],
  }
  return <Card data={data} />
}
export default Css
