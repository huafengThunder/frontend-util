import React from 'react'
import ReactDOM from 'react-dom/client'
import judgePlatform from './utils/judgePlatform'
import App from './platform/pc/app.jsx'
import MobileApp from './platform/mobile/app'
import './style/reset.less'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(!judgePlatform() ? <App /> : <MobileApp />)