import React from 'react'
import Card from '../../components/card'
import youdaoLogo from './imgs/youdao-logo.jpg'
import jsonLogo from './imgs/json-logo.png'
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
      {
        logo: jsonLogo,
        href: 'http://www.jsons.cn/jsoncheck/',
        title: 'json格式化',
        describe: '在线json格式化工具',
      },
    ],
  }
  return <Card data={data} />
}
export default Translate
