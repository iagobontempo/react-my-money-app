const server = require('./config/server') //Pegou referencia de server, para poder jogar para rotas
require('./config/database')
require('./config/routes')(server)