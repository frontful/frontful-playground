import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Views from '../../views'
import browserConfig from 'frontful-config/browser'
import express from 'express'
import {StyleManager} from 'frontful-style/react'
import {styleManager} from 'frontful-style'

const app = express()

app.use((req, res) => {
  const sessionStyleManager = styleManager.getSession(req.headers['user-agent'])
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Frontful playground</title>
        <link rel="stylesheet" href="${global.frontful.environment.assets.css.main}">
        ${sessionStyleManager.renderToString()}
        <noscript id="sidx"></noscript>
      </head>
      <body>
        <div id="app">${
          ReactDOMServer.renderToString(
            <StyleManager sessionStyleManager={sessionStyleManager}>
              <Views path={req.url} />
            </StyleManager>
          )
        }</div>
        ${browserConfig.getScript()}
        <script src="${global.frontful.environment.assets.js.vendor}"></script>
        <script src="${global.frontful.environment.assets.js.main}"></script>
      </body>
    </html>
  `)
})

export default app
