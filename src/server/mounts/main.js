import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Views from '../../views'
import browserConfig from 'frontful-config/browser'
import express from 'express'
import {Resolver} from 'frontful-resolver'
import {StyleManager} from 'frontful-style/react'
import {styleManager} from 'frontful-style'
import {Models} from 'frontful-model'

const app = express()

function render(req, res) {
  const models = new Models({
    config: {
      'frontful-router': {
        server: {req, res},
        mapping: {},
      }
    }
  })

  const resolver = new Resolver(<Views/>, {
    models: models,
  })

  if (global.frontful.environment.coldreload.state) {
    models.deserialize(global.frontful.environment.coldreload.state)
  }

  return resolver.execute().then((Views) => {
    const sessionStyleManager = styleManager.getSession(req.headers['user-agent'])
    const view = ReactDOMServer.renderToString(
      <StyleManager sessionStyleManager={sessionStyleManager}>
        <Views/>
      </StyleManager>
    )
    return {
      config: browserConfig.getScript(),
      style: sessionStyleManager.renderToString(),
      view: view,
    }
  })
}

app.use((req, res, next) => {
  render(req, res).then((html) => {
    const assets = global.frontful.environment.assets
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
  }).catch((error) => {
    next(error)
  })
})

export default app
