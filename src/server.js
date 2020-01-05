const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const routes = require('./routers/index')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// For CORS (OPTIONS is fro post request)
app.use(( req, res, next ) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.use(routes)

module.exports = app