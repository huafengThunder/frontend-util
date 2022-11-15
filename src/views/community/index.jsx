import React from 'react'
import Card from '../../components/card'
import stackoverflowLogo from './imgs/stackoverflow.png'
import juejinLogo from './imgs/juejin-logo.png'
import segmentfaultLogo from './imgs/segmentfault-logo.png'
import cnblogsLogo from './imgs/cnblogs.svg'
import csdnLogo from './imgs/csdn-logo.png'
function Translate() {
  const data = {
    menu: '翻译',
    card: [
      {
        logo: stackoverflowLogo,
        href: 'https://stackoverflow.com/',
        title: 'stackoverflow',
        describe: '全球最大it问答社区',
      },
      {
        logo: juejinLogo,
        href: 'https://juejin.cn/',
        title: '掘金',
        describe: '中文开发者的技术内容分享与交流平台',
      },
      {
        logo: segmentfaultLogo,
        href: 'https://segmentfault.com/',
        title: '思否',
        describe: '开发者技术问答社区(偏客户端)',
      },
      {
        logo: cnblogsLogo,
        href: 'https://www.cnblogs.com/',
        title: '博客园',
        describe: '知识分享社区(博客)',
      },
      {
        logo: csdnLogo,
        href: 'https://www.csdn.net/',
        title: 'csdn',
        describe: '技术交流平台(文章?都懂)',
      },
    ],
  }
  return <Card data={data} />
}
export default Translate
