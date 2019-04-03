
const path = require('path')
const express = require('express')
const cors = require('cors')

const tweetSearch = require('./routes/tweetSearch')

const server = express()


server.use(cors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    credentials: true
  }))
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))


server.use('/tweetSearch', tweetSearch)

module.exports = server