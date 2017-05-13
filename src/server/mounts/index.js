import assets from './assets'
import express from 'express'
import main from './main'

const app = express()

app.use('/assets', assets)
app.use('/', main)

export default app
