const port = 3003

const bodyParser = require('body-parser')
const express = require('express')

const server = express() // Sempre que chamar o express() ele ira chamar um novo servidor

server.use(bodyParser.urlencoded({ extended: true })) //Para toda requisão use o bodyparser para requisicoes urlencoded
server.use(bodyParser.json())

server.listen(port, function () {
    console.log(`BACKEND RUNNING ON PORT ${port}`)
})
