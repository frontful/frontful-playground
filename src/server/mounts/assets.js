import express from 'express'
import path from 'path'

const app = express()

app.use('/', express.static(path.resolve(process.cwd(), 'assets'), {maxAge: '7d'}))

export default app
