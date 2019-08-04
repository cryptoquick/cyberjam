require('source-map-support').install()

import express from 'express'
import cookieParser from 'cookie-parser'
import { config } from 'dotenv'
import * as path from 'path'
const expressGa = require('express-ga-middleware')

config()

const { NODE_ENV = 'development', PORT = '3000' } = process.env

const STATIC_DIR = path.resolve(__dirname, '..', 'site', 'dist')

const app = express()

app.use(cookieParser())

if (NODE_ENV === 'production') {
  app.use(expressGa('UA-141752083-1'))
}

app.use('/static', express.static(path.resolve(STATIC_DIR)))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(STATIC_DIR, 'index.html'))
})

app.listen(PORT, async () => {
  console.info(`Server listening on ${PORT}`)
})
