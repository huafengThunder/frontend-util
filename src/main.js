import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import judgePlatform from './utils/judgePlatform'
const PcApp = lazy(() => import('./platform/pc/app.jsx'));
const MobileApp = lazy(() => import('./platform/mobile/app.jsx'));
import './style/reset.less'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(!judgePlatform() ? <PcApp /> : <MobileApp />)