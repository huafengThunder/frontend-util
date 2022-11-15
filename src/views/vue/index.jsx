import React from 'react'
import Card from '../../components/card'
import vueLogo from './imgs/vue-logo.svg'
import piniaLogo from './imgs/pinia-logo.svg'
import vueuseLogo from './imgs/vueuse-logo.svg'
function VueJs() {
  const data = {
    menu: 'vue生态',
    card: [
      {
        logo: vueLogo,
        href: 'https://v3.cn.vuejs.org/guide/introduction.html',
        title: 'Vue.js',
        describe: '构建用户界面的渐进式框架',
      },
      {
        logo: vueLogo,
        href: 'https://router.vuejs.org/zh/',
        title: 'Vue Router',
        describe: 'Vue的官方路由',
      },
      {
        logo: vueLogo,
        href: 'https://vuex.vuejs.org/zh/guide/',
        title: 'Vuex',
        describe: 'Vue应用程序开发的状态管理模式 + 库',
      },
      {
        logo: piniaLogo,
        href: 'https://pinia.vuejs.org/zh/',
        title: 'pinia',
        describe: '拥有组合式API的Vue状态管理库',
      },
      {
        logo: vueuseLogo,
        href: 'https://vueuse.org/',
        title: 'VueUse',
        describe: '基于组合式api的实用函数集合',
      },
      {
        logo: vueLogo,
        href: 'https://cli.vuejs.org/zh/guide/',
        title: 'Vue CLI',
        describe: '基于Vue进行快速开发的完整系统',
      },
    ],
  }
  return (
    <Card data={data} />
  )
}
export default VueJs
