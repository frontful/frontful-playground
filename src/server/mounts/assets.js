import express from 'express'
import path from 'path'

const assets = express()
assets.use('/', express.static(path.resolve(process.cwd(), 'assets'), {maxAge: '7d'}))

assets.root = express()
assets.root.use('/', express.static(path.resolve(process.cwd(), 'assets/root'), {maxAge: '7d'}))

export default assets
