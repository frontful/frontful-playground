import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Views from '../../views'
import browserConfig from 'frontful-config/browser'
import express from 'express'
import {StyleManager} from 'frontful-style/react'
import {styleManager} from 'frontful-style'

const app = express()

function render(req) {
  const sessionStyleManager = styleManager.getSession(req.headers['user-agent'])
  const view = ReactDOMServer.renderToString(
    <StyleManager sessionStyleManager={sessionStyleManager}>
      <Views path={req.url} />
    </StyleManager>
  )
  return {
    config: browserConfig.getScript(),
    style: sessionStyleManager.renderToString(),
    view: view,
  }
}

app.use((req, res) => {
  const assets = global.frontful.environment.assets
  const html = render(req)

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Frontful playground</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no" />
        <link rel="stylesheet" href="${assets.css.main}">
        ${html.style}
        <noscript id="sidx"></noscript>
      </head>
      <body>
        <div id="app">${html.view}</div>
        ${html.config}
        <script src="${assets.js.vendor}"></script>
        <script src="${assets.js.main}"></script>
      </body>
    </html>
  `)
})

export default app
