import React from 'react'
import Card from '../../components/card'
import githubLogo from './imgs/github-logo.png'
import giteeLogo from './imgs/gitee-logo.png'
function VueJs() {
  const data = {
    menu: 'vue生态',
    card: [
      {
        logo: githubLogo,
        href: 'https://github.com/',
        title: 'github',
        describe: '全球最大开源仓库',
      },
      {
        logo: giteeLogo,
        href: 'https://gitee.com/',
        title: 'gitee',
        describe: '国内开源仓库',
      },
    ],
  }
  return <Card data={data} />
}
export default VueJs
