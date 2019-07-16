const express = require('express')

module.exports = function (server) { // Server é a instancia do express criada em server.js

    // Definindo URL Base para todas as rotas
    const router = express.Router() 
    server.use('/api', router) // Tudo que começar com /api ira direcionar para o router, todos servicos ira começar com /api

    // Rotas de Ciclo de Pagamento 
    const BillingCycle = require('../api/billingCycle/billingCycleService') // Referencia dos serviços
    BillingCycle.register(router, '/billingCycles') //Registrou os servicos para rota /api/billingCycles
    

}