import express from 'express'
import logoBig from '../../assets/logo.big.png'
import logoSmall from '../../assets/logo.small.png'

const app = express()

app.use((req, res) => {
  res.send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Frontful playground</title>
      </head>
      <body>
        <h3>
          Frontful playground
        </h3>
        <div>
          Experiments with build, code, packages and what-not
        </div>
        <div>
          <img src="${logoBig}"/>
          <img src="${logoSmall}"/>
        </div>
        <script src="${'/assets/main.js'}"></script>
      </body>
    </html>
  `)
})

export default app
