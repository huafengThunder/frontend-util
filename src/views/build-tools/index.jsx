import React from 'react'
import Card from '../../components/card'
import viteLogo from './imgs/vite-logo.svg'
import webpackLogo from './imgs/webpack-logo.png'
import rollupLogo from './imgs/rollup.jpg'
function Translate() {
  const data = {
    menu: '构建工具',
    card: [
      {
        logo: viteLogo,
        href: 'https://cn.vitejs.dev/',
        title: 'Vite',
        describe: '前端工具链开发(提供极速响应)',
      },
      {
        logo: webpackLogo,
        href: 'https://www.webpackjs.com/',
        title: 'Webpack',
        describe: 'JavaScript应用程序的静态模块打包工具',
      },
      {
        logo: rollupLogo,
        href: 'https://www.rollupjs.com/',
        title: 'Rollup',
        describe: 'ES6版本Javascript模块打包工具',
      },
    ],
  }
  return <Card data={data} />
}
export default Translate
