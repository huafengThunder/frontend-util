import React from 'react'
import Card from '../../components/card'
import youdaoLogo from './imgs/youdao-logo.jpg'
function Translate() {
  const data = {
    menu: '翻译',
    card: [
      {
        logo: youdaoLogo,
        href: 'https://www.youdao.com/',
        title: '有道词典',
        describe: '集成中、英、日、韩、法多语种词典',
      },
    ],
  }
  return <Card data={data} />
}
export default Translate
