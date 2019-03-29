
const path = require('path')
const express = require('express')

const tweetSearch = require('./routes/tweetSearch')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/tweetSearch', tweetSearch)

module.exports = server