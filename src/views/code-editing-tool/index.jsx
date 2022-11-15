import React from 'react'
import Card from '../../components/card'
import codeEditingToolLogo from './imgs/code-editing-tool-logo.png'
import jsbinLogo from './imgs/jsbin-logo.png'
function Translate() {
  const data = {
    menu: '翻译',
    card: [
      {
        logo: codeEditingToolLogo,
        href: 'https://codepen.io/',
        title: 'codepen',
        describe: '前端所见即所得的编码工具',
      },
      {
        logo: jsbinLogo,
        href: 'http://jsbin.com/?html,js,console,output',
        title: 'codepen',
        describe: '开放源码的协同Web开发调试工具',
      },
    ],
  }
  return <Card data={data} />
}
export default Translate
