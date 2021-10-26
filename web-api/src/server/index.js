const express = require('express')

const helmet = require('helmet')

const cors = require('cors')

const app = express()

const fnRouterConfig = require('../routes')
const jwtMiddleware = require('../helper/jwt')

const rotasBloqueadas = ['/api/v1']
const ErrorsHandler = require('../Errors')
app.use( jwtMiddleware( {blocks: rotasBloqueadas} ) )
app.use( helmet() )
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
fnRouterConfig( {app} )
ErrorsHandler(app)

require('../database/database')

module.exports = app