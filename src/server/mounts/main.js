import React from 'react'
import Views from '../../views'
import compileContext from './utils/compileContext'
import environment from 'frontful-environment'
import express from 'express'
import serverConfig from 'frontful-config/server'

const app = express()

app.use((req, res, next) => {
  compileContext(<Views/>, {req, res}).then((context) => {
    const bundle = environment.bundle
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>${serverConfig.appName}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no" />
          <link rel="stylesheet" href="${bundle.css.main}">
          ${context.style}
          <noscript id="sidx"></noscript>
        </head>
        <body>
          <div id="app">${context.view}</div>
          ${context.config}
          <script src="${bundle.js.vendor}"></script>
          <script src="${bundle.js.main}"></script>
        </body>
      </html>
    `)
  }).catch((error) => {
    next(error)
  })
})

export default app
