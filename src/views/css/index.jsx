import React from 'react'
import Card from '../../components/card'
import cssLogo from './imgs/css-logo.png'
import lessLogo from './imgs/less-logo.png'
import sassLogo from './imgs/sass-logo.png'
function Css() {
  const data = {
    menu: 'css',
    card: [
      {
        logo: cssLogo,
        href: 'https://www.apiref.com/css-zh/index.htm',
        title: 'sass',
        describe: 'CSS3中文手册',
      },
      {
        logo: lessLogo,
        href: 'https://less.bootcss.com/',
        title: 'less',
        describe: 'CSS预处理语言',
      },
      {
        logo: sassLogo,
        href: 'https://www.sass.hk/',
        title: 'sass',
        describe: 'CSS扩展语言',
      },
    ],
  }
  return <Card data={data} />
}
export default Css
