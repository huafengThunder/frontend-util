import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './platform/pc/app.jsx'
import MobileApp from './platform/mobile/app'
import './style/reset.less'
const root = ReactDOM.createRoot(document.getElementById('root'))
function judgePlatform(){
  let ua = navigator.userAgent.toLowerCase();
  return /mobile|android|iphone|ipod|phone|ipad/i.test(ua);
}
root.render(!judgePlatform() ? <App /> : <MobileApp/>)