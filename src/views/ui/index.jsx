import React from 'react'
import Card from '../../components/card'
import lanhuappLogo from './imgs/lanhuapp-logo.png'
import baotuLogo from './imgs/baotu-logo.png'
import shetuLogo from './imgs/shetu-logo.png'
import cutfigureLogo from './imgs/cutfigure-logo.png'
function UI() {
  const data = {
    menu: 'UI',
    card: [
      {
        logo: lanhuappLogo,
        href: 'https://lanhuapp.com/',
        title: '蓝湖',
        describe: 'ui设计协作平台',
      },
      {
        logo: baotuLogo,
        href: 'https://ibaotu.com/',
        title: '包图网',
        describe: '图片设计素材',
      },
      {
        logo: shetuLogo,
        href: 'https://699pic.com/',
        title: '摄图网',
        describe: '图片设计素材',
      },
      {
        logo: cutfigureLogo,
        href: 'https://www.zxgj.cn/g/tupiancaijian',
        title: '切图工具',
        describe: '在线切图工具',
      },
    ],
  }
  return <Card data={data} />
}
export default UI
