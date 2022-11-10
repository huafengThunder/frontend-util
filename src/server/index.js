import app from './http'
import { renderToString } from 'react-dom/server'
import Home from '../share/pages/home'
app.get('/', function (req, res) {
  const content = renderToString(<Home />)
  res.send(`
    <html>
      <head>
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `)
})