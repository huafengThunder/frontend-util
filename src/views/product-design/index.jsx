import React from 'react'
import Card from '../../components/card'
import figmaLogo from './imgs/figma-logo.png'
import modaoLogo from './imgs/modao-logo.png'
import mockplusLogo from './imgs/mockplus-logo.png'
function productDesign() {
  const data = {
    menu: 'UI',
    card: [
      {
        logo: figmaLogo,
        href: 'https://www.figma.com/',
        title: 'figma',
        describe: '协同界面设计工具',
      },
      {
        logo: modaoLogo,
        href: 'https://modao.cc/',
        title: 'modao',
        describe: '产品设计协作平台',
      },
      {
        logo: mockplusLogo,
        href: 'https://www.mockplus.cn/',
        title: '幕客',
        describe: '产品设计协作平台',
      },
    ],
  }
  return <Card data={data} />
}
export default productDesign
