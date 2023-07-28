import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import judgePlatform from './utils/judgePlatform'
const PcApp = lazy(() => import('./platform/pc/app.jsx'));
const MobileApp = lazy(() => import('./platform/mobile/app.jsx'));
import './style/reset.less'
const root = ReactDOM.createRoot(document.getElementById('root'))
import VConsole from 'vconsole';
if (judgePlatform()) {
    const vConsole = new VConsole();
    // 接下来即可照常使用 `console` 等方法
    console.log('Hello world');
    // vConsole.destroy();
}
root.render(!judgePlatform() ? <PcApp /> : <MobileApp />)