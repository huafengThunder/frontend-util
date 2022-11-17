import React from 'react'
import Card from '../../components/card'
import gitLogo from './imgs/git-logo.png'
function VersionControl() {
  const data = {
    menu: '编译器',
    card: [
      {
        logo: gitLogo,
        href: 'https://git-scm.com/',
        title: 'Git',
        describe: '开源的分布式版本控制系统',
      },
      {
        logo: gitLogo,
        href: 'https://www.w3cschool.cn/isrekq/5ihvyozt.html',
        title: 'Git手册',
        describe: 'git常用指令',
      },
    ],
  }
  return <Card data={data} />
}
export default VersionControl
