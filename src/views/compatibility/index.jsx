import React from 'react'
import Card from '../../components/card'
import mdnLogo from './imgs/mdn-loago.png'
import caniuseLogo from './imgs/caniuse-logo.png'
function Translate() {
  const data = {
    menu: '兼容性',
    card: [
      {
        logo: mdnLogo,
        href: 'https://developer.mozilla.org/zh-CN/',
        title: 'MDN',
        describe: 'MDN Web Docs',
      },
      {
        logo: caniuseLogo,
        href: 'https://caniuse.com/',
        title: 'Can I use',
        describe: 'Can I use__?',
      },
    ],
  }
  return <Card data={data} />
}
export default Translate
