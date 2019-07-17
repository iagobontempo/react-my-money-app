const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const allowCors = require('./cors')
const queryParser = require('express-query-int') // Usado para conseguir fazer paginação com query EX: http://localhost:3003/api/billingCycles?skip=0&limit=1

const server = express() // Sempre que chamar o express() ele ira chamar um novo servidor

server.use(bodyParser.urlencoded({ extended: true })) //Para toda requisão use o bodyparser para requisicoes urlencoded
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser()) 

server.listen(port, function () {
    console.log(`BACKEND RUNNING ON PORT ${port}`)
})

module.exports = server // Para poder ser chamado pelas rotas dentro de loader.js
