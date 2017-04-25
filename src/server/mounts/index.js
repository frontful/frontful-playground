import express from 'express'
import main from './main'
import assets from './assets'

const app = express()

app.use('/assets', assets)
app.use('/', main)

export default app
