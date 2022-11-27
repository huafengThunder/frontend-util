const data = {
  CommonTools: {
    title: '常用工具',
    card: [
      {
        logo: require('./imgs/common-tools/youdao-logo.jpg'),
        href: 'https://www.youdao.com/',
        title: '有道词典',
        describe: '集成中、英、日、韩、法多语种词典',
      },
      {
        logo: require('./imgs/common-tools/daxiaoxie-logo.png'),
        href: 'https://www.iamwawa.cn/daxiaoxie.html',
        title: '在线命名转换',
        describe: '支持驼峰,大小写,下划线等',
      },
      {
        logo: require('./imgs/common-tools/json-logo.png'),
        href: 'https://www.sojson.com/',
        title: 'json格式化',
        describe: '在线json格式化工具',
      },
      {
        logo: require('./imgs/common-tools/postman-logo.png'),
        href: 'https://v7.apipost.cn/apis?utm_source=10039&bd_vid=8463452207854310318#/apis/run',
        title: 'postman',
        describe: 'postman web版本(不支持本地接口)',
      },
      {
        logo: require('./imgs/common-tools/nvm-logo.png'),
        href: 'https://github.com/nvm-sh/nvm/releases',
        title: 'nvm',
        describe: 'node version manager',
      },
    ],
  },
  VueJs: {
    menu:'手册',
    title: 'vue生态',
    card: [
      {
        logo: require('./imgs/vue/vue-logo.svg'),
        href: 'https://v3.cn.vuejs.org/guide/introduction.html',
        title: 'Vue.js',
        describe: '构建用户界面的渐进式框架',
      },
      {
        logo: require('./imgs/vue/vue-logo.svg'),
        href: 'https://router.vuejs.org/zh/',
        title: 'Vue Router',
        describe: 'Vue的官方路由',
      },
      {
        logo: require('./imgs/vue/vue-logo.svg'),
        href: 'https://vuex.vuejs.org/zh/guide/',
        title: 'Vuex',
        describe: 'Vue应用程序开发的状态管理模式 + 库',
      },
      {
        logo: require('./imgs/vue/pinia-logo.svg'),
        href: 'https://pinia.vuejs.org/zh/',
        title: 'pinia',
        describe: '拥有组合式API的Vue状态管理库',
      },
      {
        logo: require('./imgs/vue/vueuse-logo.svg'),
        href: 'https://vueuse.org/',
        title: 'VueUse',
        describe: '基于组合式api的实用函数集合',
      },
      {
        logo: require('./imgs/vue/vue-logo.svg'),
        href: 'https://cli.vuejs.org/zh/guide/',
        title: 'Vue CLI',
        describe: '基于Vue进行快速开发的完整系统',
      },
    ],
  },
  ReactJs: {
    menu: '手册',
    title: 'react生态',
    card: [
      {
        logo: require('./imgs/react/react-logo.svg'),
        href: 'https://react.docschina.org/',
        title: 'React',
        describe: '用于构建用户界面的JavaScript 库',
      },
      {
        logo: require('./imgs/react/react-router-logo.png'),
        href: 'https://reactrouter.com/en',
        title: 'React Router',
        describe: 'React官方路由',
      },
      {
        logo: require('./imgs/react/redux-logo.svg'),
        href: 'https://cn.redux.js.org/',
        title: 'Redux',
        describe: 'JS应用的状态容器，提供可预测的状态管理',
      },
      {
        logo: require('./imgs/react/redux-logo.svg'),
        href: 'https://react-redux.js.org/',
        title: 'React Redux',
        describe: 'Official React bindings for Redux',
      },
      {
        logo: require('./imgs/react/react-logo.svg'),
        href: 'https://www.html.cn/create-react-app/',
        title: 'Create React App',
        describe: '通过运行一个命令来建立现代Web应用程序',
      },
    ],
  },
  Html: {
    menu: '手册',
    title: 'html',
    card: [
      {
        logo: require('./imgs/html/html5-logo.png'),
        href: 'https://www.w3school.com.cn/html/html5_intro.asp',
        title: 'html5',
        describe: 'html5手册',
      },
    ],
  },
  Css: {
    menu: '手册',
    title: 'css',
    card: [
      {
        logo: require('./imgs/css/css-logo.png'),
        href: 'https://www.apiref.com/css-zh/index.htm',
        title: 'sass',
        describe: 'CSS3中文手册',
      },
      {
        logo: require('./imgs/css/less-logo.png'),
        href: 'https://less.bootcss.com/',
        title: 'less',
        describe: 'CSS预处理语言',
      },
      {
        logo: require('./imgs/css/sass-logo.png'),
        href: 'https://www.sass.hk/',
        title: 'sass',
        describe: 'CSS扩展语言',
      },
    ],
  },
  JavaScript: {
    menu: '手册',
    title: 'js/拓展',
    card: [
      {
        logo: require('./imgs/javascript/es6-logo.png'),
        href: 'https://es6.ruanyifeng.com/',
        title: 'es6',
        describe: 'ES6入门教程',
      },
      {
        logo: require('./imgs/javascript/es5-logo.webp'),
        href: 'http://javascript.ruanyifeng.com/#introduction',
        title: 'es5',
        describe: 'JavaScript标准参考教程',
      },
      {
        logo: require('./imgs/javascript/promises-logo.png'),
        href: 'http://liubin.org/promises-book/',
        title: 'Promise专题',
        describe: 'Promise迷你书',
      },
      {
        logo: require('./imgs/javascript/ts-logo.png'),
        href: 'https://www.tslang.cn/docs/handbook/symbols.html',
        title: 'typescript',
        describe: 'JavaScript类型的超集',
      },
    ],
  },
  BuildTools: {
    menu: '手册',
    title: 'build/cli',
    card: [
      {
        logo: require('./imgs/build-tools/vite-logo.svg'),
        href: 'https://cn.vitejs.dev/',
        title: 'Vite',
        describe: '前端工具链开发(提供极速响应)',
      },
      {
        logo: require('./imgs/build-tools/webpack-logo.png'),
        href: 'https://www.webpackjs.com/',
        title: 'Webpack',
        describe: 'JavaScript应用程序的静态模块打包工具',
      },
      {
        logo: require('./imgs/build-tools/rollup.png'),
        href: 'https://www.rollupjs.com/',
        title: 'Rollup',
        describe: 'ES6版本Javascript模块打包工具',
      },
      {
        logo: require('./imgs/build-tools/parcel-logo.png'),
        href: 'https://parceljs.org/docs/',
        title: 'parcel',
        describe: '零配置构建工具',
      },
      {
        logo: require('./imgs/build-tools/turbo-logo.png'),
        href: 'https://turbo.build/',
        title: 'parcel',
        describe: 'js/ts智能构建系统',
      },
    ],
  },
  PackageManager: {
    menu: '手册',
    title: '包管理器',
    card: [
      {
        logo: require('./imgs/package-manager/npm-logo.png'),
        href: 'https://www.npmjs.com/',
        title: 'npm',
        describe: 'node package manager',
      },
      {
        logo: require('./imgs/package-manager/yarn-logo.png'),
        href: 'https://yarn.bootcss.com/docs/usage',
        title: 'yarn',
        describe: 'node包管理器',
      },
      {
        logo: require('./imgs/package-manager/pnpm-logo.png'),
        href: 'https://pnpm.io/zh/motivation',
        title: 'pnpm',
        describe: '软链的方式添加依赖',
      }
    ],
  },
  VersionControl: {
    menu: '手册',
    title: '版本控制',
    card: [
      {
        logo: require('./imgs/version-control/git-logo.png'),
        href: 'https://git-scm.com/',
        title: 'Git',
        describe: '开源的分布式版本控制系统',
      },
      {
        logo: require('./imgs/version-control/git-logo.png'),
        href: 'https://www.w3cschool.cn/isrekq/5ihvyozt.html',
        title: 'Git手册',
        describe: 'git常用指令',
      },
    ],
  },
  Compiler: {
    menu: '手册',
    title: '编译器',
    card: [
      {
        logo: require('./imgs/compiler/babel-logo.png'),
        href: 'https://www.babeljs.cn/',
        title: 'babel',
        describe: 'JavaScript编译器',
      },
      {
        // logo: esbuildLogo,
        logo: require('./imgs/compiler/esbuild-logo.svg'),
        href: 'https://esbuild.github.io/',
        title: 'esbuild',
        describe: '基于go的简单快速编译器',
      },
      {
        logo: require('./imgs/compiler/swc-logo.png'),
        href: 'https://swc.rs/',
        title: 'SWC',
        describe: '基于rust的高性能编译器',
      },
    ],
  },
  Compatibility: {
    menu: '手册',
    title: '兼容性',
    card: [
      {
        logo: require('./imgs/compatibility/mdn-loago.png'),
        href: 'https://developer.mozilla.org/zh-CN/',
        title: 'MDN',
        describe: 'MDN Web Docs',
      },
      {
        logo: require('./imgs/compatibility/caniuse-logo.png'),
        href: 'https://caniuse.com/',
        title: 'Can I use',
        describe: 'Can I use__?',
      },
    ],
  },
  FastApp: {
    title: '快应用',
    card: [
      {
        logo: require('./imgs/fast-app/uniapp-logo.png'),
        href: 'https://uniapp.dcloud.net.cn/',
        title: 'uniapp',
        describe: '开发所有前端应用的框架(适合快应用)',
      },
      {
        logo: require('./imgs/fast-app/weixin-logo.png'),
        href: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
        title: '微信小程序',
        describe: '微信小程序开发文档',
      },
      {
        logo: require('./imgs/fast-app/weixin-logo.png'),
        href: 'https://mp.weixin.qq.com/',
        title: '微信公众后台',
        describe: '微信小程序开发后台',
      },
    ],
  },
  Community: {
    title: '社区',
    card: [
      {
        logo: require('./imgs/community/stackoverflow.png'),
        href: 'https://stackoverflow.com/',
        title: 'stackoverflow',
        describe: '全球最大it问答社区',
      },
      {
        logo: require('./imgs/community/juejin-logo.png'),
        href: 'https://juejin.cn/',
        title: '掘金',
        describe: '中文开发者的技术内容分享与交流平台',
      },
      {
        logo: require('./imgs/community/segmentfault-logo.png'),
        href: 'https://segmentfault.com/',
        title: '思否',
        describe: '开发者技术问答社区(偏客户端)',
      },
      {
        logo: require('./imgs/community/cnblogs.svg'),
        href: 'https://www.cnblogs.com/',
        title: '博客园',
        describe: '知识分享社区(博客)',
      },
      {
        logo: require('./imgs/community/csdn-logo.png'),
        href: 'https://www.csdn.net/',
        title: 'csdn',
        describe: '技术交流平台(文章?都懂)',
      },
    ],
  },
  Algoritham: {
    title: '算法刷题',
    card: [
      {
        logo: require('./imgs/algorithm/leetcode-logo.jpg'),
        href: 'https://leetcode.cn/',
        title: 'leetcode',
        describe: '经典丰富算法刷题平台',
      },
      {
        logo: require('./imgs/algorithm/nowcoder-logo.jpg'),
        href: 'https://www.nowcoder.com/',
        title: 'nowcoder',
        describe: '算法刷题/面试平台',
      },
    ],
  },
  CodeEditingTool: {
    title: '代码编辑工具',
    card: [
      {
        logo: require('./imgs/code-editing-tool/staticblitz-logo.png'),
        href: 'https://stackblitz.com/',
        title: 'stackblitz',
        describe: '在线开发工具(ide)',
      },
      {
        logo: require('./imgs/code-editing-tool/code-editing-tool-logo.png'),
        href: 'https://codepen.io/',
        title: 'codepen',
        describe: '前端所见即所得的编码工具',
      },
      {
        logo: require('./imgs/code-editing-tool/jsbin-logo.png'),
        href: 'http://jsbin.com/?html,js,console,output',
        title: 'codepen',
        describe: '开放源码的协同Web开发调试工具',
      },
    ],
  },
  Maintenance:{
    title: '运维',
    card: [
      {
        logo: require('./imgs/server-side/nginx-logo.png'),
        href: 'http://tengine.taobao.org/book/index.html',
        title: 'nginx',
        describe: 'nginx轻量级静态服务器',
      },
      { 
        logo: require('./imgs/server-side/docker-logo.webp'),
        href: 'https://www.docker.com/',
        title: 'docker',
        describe: 'Develop faster. Run anywhere.',
      },
      {
        logo: require('./imgs/server-side/whistle-logo.png'),
        href: 'http://wproxy.org/whistle/',
        title: 'whistle',
        describe: '跨平台web调试代理工具',
      },
      {
        logo: require('./imgs/server-side/pm2-logo.png'),
        href: 'https://pm2.keymetrics.io/',
        title: 'pm2',
        describe: 'node.js的生产过程管理器',
      },
      {
        logo: require('./imgs/server-side/nodemon-logo.svg'),
        href: 'https://nodemon.io/',
        title: 'nodemon',
        describe: 'node.js的生产过程管理器',
      },
    ]
  },
  Repository: {
    title: '仓库',
    card: [
      {
        logo: require('./imgs/repository/github-logo.png'),
        href: 'https://github.com/',
        title: 'github',
        describe: '全球最大开源仓库',
      },
      {
        logo: require('./imgs/repository/gitee-logo.png'),
        href: 'https://gitee.com/',
        title: 'gitee',
        describe: '国内开源仓库',
      },
    ],
  },
  UI: {
    title: 'UI',
    card: [
      {
        logo: require('./imgs/ui/lanhuapp-logo.png'),
        href: 'https://lanhuapp.com/',
        title: '蓝湖',
        describe: 'ui设计协作平台',
      },
      {
        logo: require('./imgs/ui/baotu-logo.png'),
        href: 'https://ibaotu.com/',
        title: '包图网',
        describe: '图片设计素材',
      },
      {
        logo: require('./imgs/ui/shetu-logo.png'),
        href: 'https://699pic.com/',
        title: '摄图网',
        describe: '图片设计素材',
      },
      {
        logo: require('./imgs/ui/cutfigure-logo.png'),
        href: 'https://www.zxgj.cn/g/tupiancaijian',
        title: '切图工具',
        describe: '在线切图工具',
      },
    ],
  },
  ProductDesign: {
    title: '产品',
    card: [
      {
        logo: require('./imgs/product-design/figma-logo.png'),
        href: 'https://www.figma.com/',
        title: 'figma',
        describe: '协同界面设计工具',
      },
      {
        logo: require('./imgs/product-design/modao-logo.png'),
        href: 'https://modao.cc/',
        title: 'modao',
        describe: '产品设计协作平台',
      },
      {
        logo: require('./imgs/product-design/mockplus-logo.png'),
        href: 'https://www.mockplus.cn/',
        title: '幕客',
        describe: '产品设计协作平台',
      },
    ],
  }
}
export default new Map(Object.entries(data))