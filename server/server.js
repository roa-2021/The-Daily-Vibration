const path = require('path')
const express = require('express')
// const cors = require('cors') // <- if you use this, npm install cors

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
// server.use(cors('*'))

const commentRoutes = require('./routes/comments')

server.use('/api/v1/comment', commentRoutes)

module.exports = server
