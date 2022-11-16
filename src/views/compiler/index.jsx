import React from 'react'
import Card from '../../components/card'
import babelLogo from './imgs/babel-logo.png'
import esbuildLogo from './imgs/esbuild-logo.svg'
import swcLogo from './imgs/swc-logo.png'
function Compiler() {
  const data = {
    menu: '编译器',
    card: [
      {
        logo: babelLogo,
        href: 'https://www.babeljs.cn/',
        title: 'babel',
        describe: 'JavaScript编译器',
      },
      {
        logo: esbuildLogo,
        href: 'https://esbuild.github.io/',
        title: 'esbuild',
        describe: '基于go的简单快速编译器',
      },
      {
        logo: swcLogo,
        href: 'https://swc.rs/',
        title: 'SWC',
        describe: '基于rust的高性能编译器',
      },
    ],
  }
  return <Card data={data} />
}
export default Compiler
