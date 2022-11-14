import React from 'react'
import Card from '../../components/card'
import reactLogo from './imgs/react-logo.svg'
import reactRouterLogo from './imgs/react-router-logo.png'
export default function ReactJs() {
  const data = {
    menu: '构建工具',
    card: [
      {
        logo: reactLogo,
        href: 'https://react.docschina.org/',
        title: 'React',
        describe: '用于构建用户界面的JavaScript 库',
      },
      {
        logo: reactRouterLogo,
        href: 'https://reactrouter.com/en/main',
        title: 'React Router',
        describe: 'React官方路由',
      },
      {
        logo: reactLogo,
        href: 'https://www.html.cn/create-react-app/',
        title: 'Create React App',
        describe: '通过运行一个命令来建立现代Web应用程序',
      },
    ],
  }
  return <Card data={data} />
}
