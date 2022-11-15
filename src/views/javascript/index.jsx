import React from 'react'
import Card from '../../components/card'
import es6Logo from './imgs/es6-logo.png'
import es5Logo from './imgs/es5-logo.webp'
import tsLogo from './imgs/ts-logo.png'
import promisesLogo from './imgs/promises-logo.png'
function VueJs() {
  const data = {
    menu: 'js/拓展',
    card: [
      {
        logo: es6Logo,
        href: 'https://es6.ruanyifeng.com/',
        title: 'es6',
        describe: 'ES6入门教程',
      },
      {
        logo: es5Logo,
        href: 'http://javascript.ruanyifeng.com/#introduction',
        title: 'es5',
        describe: 'JavaScript标准参考教程',
      },
      {
        logo: promisesLogo,
        href: 'http://liubin.org/promises-book/',
        title: 'Promise专题',
        describe: 'Promise迷你书',
      },
      {
        logo: tsLogo,
        href: 'https://www.tslang.cn/docs/handbook/symbols.html',
        title: 'typescript',
        describe: 'JavaScript类型的超集',
      },
    ],
  }
  return <Card data={data} />
}
export default VueJs
