import React from 'react'
import Card from '../../components/card'
import reactLogo from './imgs/react-logo.svg'
import reactRouterLogo from './imgs/react-router-logo.png'
import reduxLogo from './imgs/redux-logo.svg'
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
        logo: reduxLogo,
        href: 'https://cn.redux.js.org/',
        title: 'Redux',
        describe: 'JS应用的状态容器，提供可预测的状态管理',
      },
      {
        logo: reduxLogo,
        href: 'https://react-redux.js.org/',
        title: 'React Redux',
        describe: 'Official React bindings for Redux',
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
