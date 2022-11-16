import React from 'react'
import Card from '../../components/card'
import uniappLogo from './imgs/uniapp-logo.png'
import weixinLogo from './imgs/weixin-logo.png'
function FastApp() {
  const data = {
    menu: '翻译',
    card: [
      {
        logo: uniappLogo,
        href: 'https://uniapp.dcloud.net.cn/',
        title: 'uniapp',
        describe: '开发所有前端应用的框架(适合快应用)',
      },
      {
        logo: weixinLogo,
        href: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
        title: '微信小程序',
        describe: '微信小程序开发文档',
      },
      {
        logo: weixinLogo,
        href: 'https://mp.weixin.qq.com/',
        title: '微信公众后台',
        describe: '微信小程序开发后台',
      },
    ],
  }
  return <Card data={data} />
}
export default FastApp
