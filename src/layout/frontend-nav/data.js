const data = {
  VueJs: {
    menu:'手册',
    title: 'vue生态',
    card: [
      {
        logo: require('./main/imgs/vue/vue-logo.svg'),
        href: 'https://v3.cn.vuejs.org/guide/introduction.html',
        title: 'Vue.js',
        describe: '构建用户界面的渐进式框架',
      },
      {
        logo: require('./main/imgs/vue/vue-logo.svg'),
        href: 'https://router.vuejs.org/zh/',
        title: 'Vue Router',
        describe: 'Vue的官方路由',
      },
      {
        logo: require('./main/imgs/vue/vue-logo.svg'),
        href: 'https://vuex.vuejs.org/zh/guide/',
        title: 'Vuex',
        describe: 'Vue应用程序开发的状态管理模式 + 库',
      },
      {
        logo: require('./main/imgs/vue/pinia-logo.svg'),
        href: 'https://pinia.vuejs.org/zh/',
        title: 'pinia',
        describe: '拥有组合式API的Vue状态管理库',
      },
      {
        logo: require('./main/imgs/vue/vueuse-logo.svg'),
        href: 'https://vueuse.org/',
        title: 'VueUse',
        describe: '基于组合式api的实用函数集合',
      },
      {
        logo: require('./main/imgs/vue/vue-logo.svg'),
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
        logo: require('./main/imgs/react/react-logo.svg'),
        href: 'https://react.docschina.org/',
        title: 'React',
        describe: '用于构建用户界面的JavaScript 库',
      },
      {
        logo: require('./main/imgs/react/react-router-logo.png'),
        href: 'https://reactrouter.com/en/main',
        title: 'React Router',
        describe: 'React官方路由',
      },
      {
        logo: require('./main/imgs/react/redux-logo.svg'),
        href: 'https://cn.redux.js.org/',
        title: 'Redux',
        describe: 'JS应用的状态容器，提供可预测的状态管理',
      },
      {
        logo: require('./main/imgs/react/redux-logo.svg'),
        href: 'https://react-redux.js.org/',
        title: 'React Redux',
        describe: 'Official React bindings for Redux',
      },
      {
        logo: require('./main/imgs/react/react-logo.svg'),
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
        logo: require('./main/imgs/html/html5-logo.png'),
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
        logo: require('./main/imgs/css/css-logo.png'),
        href: 'https://www.apiref.com/css-zh/index.htm',
        title: 'sass',
        describe: 'CSS3中文手册',
      },
      {
        logo: require('./main/imgs/css/less-logo.png'),
        href: 'https://less.bootcss.com/',
        title: 'less',
        describe: 'CSS预处理语言',
      },
      {
        logo: require('./main/imgs/css/sass-logo.png'),
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
        logo: require('./main/imgs/javascript/es6-logo.png'),
        href: 'https://es6.ruanyifeng.com/',
        title: 'es6',
        describe: 'ES6入门教程',
      },
      {
        logo: require('./main/imgs/javascript/es5-logo.webp'),
        href: 'http://javascript.ruanyifeng.com/#introduction',
        title: 'es5',
        describe: 'JavaScript标准参考教程',
      },
      {
        logo: require('./main/imgs/javascript/promises-logo.png'),
        href: 'http://liubin.org/promises-book/',
        title: 'Promise专题',
        describe: 'Promise迷你书',
      },
      {
        logo: require('./main/imgs/javascript/ts-logo.png'),
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
        logo: require('./main/imgs/build-tools/vite-logo.svg'),
        href: 'https://cn.vitejs.dev/',
        title: 'Vite',
        describe: '前端工具链开发(提供极速响应)',
      },
      {
        logo: require('./main/imgs/build-tools/webpack-logo.png'),
        href: 'https://www.webpackjs.com/',
        title: 'Webpack',
        describe: 'JavaScript应用程序的静态模块打包工具',
      },
      {
        logo: require('./main/imgs/build-tools/rollup.png'),
        href: 'https://www.rollupjs.com/',
        title: 'Rollup',
        describe: 'ES6版本Javascript模块打包工具',
      },
      {
        logo: require('./main/imgs/build-tools/parcel-logo.png'),
        href: 'https://parceljs.org/docs/',
        title: 'parcel',
        describe: '零配置构建工具',
      },
      {
        logo: require('./main/imgs/build-tools/turbo-logo.png'),
        href: 'https://turbo.build/',
        title: 'parcel',
        describe: 'js/ts智能构建系统',
      },
    ],
  },
  VersionControl: {
    menu: '手册',
    title: '版本控制',
    card: [
      {
        logo: require('./main/imgs/version-control/git-logo.png'),
        href: 'https://git-scm.com/',
        title: 'Git',
        describe: '开源的分布式版本控制系统',
      },
      {
        logo: require('./main/imgs/version-control/git-logo.png'),
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
        logo: require('./main/imgs/compiler/babel-logo.png'),
        href: 'https://www.babeljs.cn/',
        title: 'babel',
        describe: 'JavaScript编译器',
      },
      {
        // logo: esbuildLogo,
        logo: require('./main/imgs/compiler/esbuild-logo.svg'),
        href: 'https://esbuild.github.io/',
        title: 'esbuild',
        describe: '基于go的简单快速编译器',
      },
      {
        logo: require('./main/imgs/compiler/swc-logo.png'),
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
        logo: require('./main/imgs/compatibility/mdn-loago.png'),
        href: 'https://developer.mozilla.org/zh-CN/',
        title: 'MDN',
        describe: 'MDN Web Docs',
      },
      {
        logo: require('./main/imgs/compatibility/caniuse-logo.png'),
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
        logo: require('./main/imgs/fast-app/uniapp-logo.png'),
        href: 'https://uniapp.dcloud.net.cn/',
        title: 'uniapp',
        describe: '开发所有前端应用的框架(适合快应用)',
      },
      {
        logo: require('./main/imgs/fast-app/weixin-logo.png'),
        href: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
        title: '微信小程序',
        describe: '微信小程序开发文档',
      },
      {
        logo: require('./main/imgs/fast-app/weixin-logo.png'),
        href: 'https://mp.weixin.qq.com/',
        title: '微信公众后台',
        describe: '微信小程序开发后台',
      },
    ],
  },
  CommonTools: {
    title: '工具',
    card: [
      {
        logo: require('./main/imgs/common-tools/youdao-logo.jpg'),
        href: 'https://www.youdao.com/',
        title: '有道词典',
        describe: '集成中、英、日、韩、法多语种词典',
      },
      {
        logo: require('./main/imgs/common-tools/json-logo.png'),
        href: 'https://www.sojson.com/',
        title: 'json格式化',
        describe: '在线json格式化工具',
      },
    ],
  },
  Community: {
    title: '社区',
    card: [
      {
        logo: require('./main/imgs/community/stackoverflow.png'),
        href: 'https://stackoverflow.com/',
        title: 'stackoverflow',
        describe: '全球最大it问答社区',
      },
      {
        logo: require('./main/imgs/community/juejin-logo.png'),
        href: 'https://juejin.cn/',
        title: '掘金',
        describe: '中文开发者的技术内容分享与交流平台',
      },
      {
        logo: require('./main/imgs/community/segmentfault-logo.png'),
        href: 'https://segmentfault.com/',
        title: '思否',
        describe: '开发者技术问答社区(偏客户端)',
      },
      {
        logo: require('./main/imgs/community/cnblogs.svg'),
        href: 'https://www.cnblogs.com/',
        title: '博客园',
        describe: '知识分享社区(博客)',
      },
      {
        logo: require('./main/imgs/community/csdn-logo.png'),
        href: 'https://www.csdn.net/',
        title: 'csdn',
        describe: '技术交流平台(文章?都懂)',
      },
    ],
  },
  Algorithm: {
    title: '算法刷题',
    card: [
      {
        logo: require('./main/imgs/algorithm/leetcode-logo.jpg'),
        href: 'https://leetcode.cn/',
        title: 'leetcode',
        describe: '经典丰富算法刷题平台',
      },
      {
        logo: require('./main/imgs/algorithm/nowcoder-logo.jpg'),
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
        logo: require('./main/imgs/code-editing-tool/code-editing-tool-logo.png'),
        href: 'https://codepen.io/',
        title: 'codepen',
        describe: '前端所见即所得的编码工具',
      },
      {
        logo: require('./main/imgs/code-editing-tool/jsbin-logo.png'),
        href: 'http://jsbin.com/?html,js,console,output',
        title: 'codepen',
        describe: '开放源码的协同Web开发调试工具',
      },
    ],
  },
  Repository: {
    title: '仓库',
    card: [
      {
        logo: require('./main/imgs/repository/github-logo.png'),
        href: 'https://github.com/',
        title: 'github',
        describe: '全球最大开源仓库',
      },
      {
        logo: require('./main/imgs/repository/gitee-logo.png'),
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
        logo: require('./main/imgs/ui/lanhuapp-logo.png'),
        href: 'https://lanhuapp.com/',
        title: '蓝湖',
        describe: 'ui设计协作平台',
      },
      {
        logo: require('./main/imgs/ui/baotu-logo.png'),
        href: 'https://ibaotu.com/',
        title: '包图网',
        describe: '图片设计素材',
      },
      {
        logo: require('./main/imgs/ui/shetu-logo.png'),
        href: 'https://699pic.com/',
        title: '摄图网',
        describe: '图片设计素材',
      },
      {
        logo: require('./main/imgs/ui/cutfigure-logo.png'),
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
        logo: require('./main/imgs/product-design/figma-logo.png'),
        href: 'https://www.figma.com/',
        title: 'figma',
        describe: '协同界面设计工具',
      },
      {
        logo: require('./main/imgs/product-design/modao-logo.png'),
        href: 'https://modao.cc/',
        title: 'modao',
        describe: '产品设计协作平台',
      },
      {
        logo: require('./main/imgs/product-design/mockplus-logo.png'),
        href: 'https://www.mockplus.cn/',
        title: '幕客',
        describe: '产品设计协作平台',
      },
    ],
  }
}
export default new Map(Object.entries(data))