import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Views from '../../views'
import express from 'express'
import browserConfig from 'frontful-config/browser'

const app = express()

app.use((req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Frontful playground</title>
        <link rel="stylesheet" href="${global.frontful.environment.assets.css.main}">
        ${browserConfig.getScript()}
      </head>
      <body>
        <div id="app">${
          ReactDOMServer.renderToString(
            <Views path={req.url} />
          )
        }</div>
        <script src="${global.frontful.environment.assets.js.vendor}"></script>
        <script src="${global.frontful.environment.assets.js.main}"></script>
      </body>
    </html>
  `)
})

export default app
