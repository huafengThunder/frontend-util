import React from 'react'
import Card from '../../components/card'
import leetcodeLogo from './imgs/leetcode-logo.jpg'
import nowcoderLogo from './imgs/nowcoder-logo.jpg'
function Css() {
  const data = {
    menu: 'css',
    card: [
      {
        logo: leetcodeLogo,
        href: 'https://leetcode.cn/',
        title: 'leetcode',
        describe: '经典丰富算法刷题平台',
      },
      {
        logo: nowcoderLogo,
        href: 'https://www.nowcoder.com/',
        title: 'nowcoder',
        describe: '算法刷题/面试平台',
      },
    ],
  }
  return <Card data={data} />
}
export default Css
