const BillingCycle = require('./billingCycle') //Pegou a referencia da Database e Schemas
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete']) //Metodos que utilizarei nestes esquemas
BillingCycle.updateOptions({new: true, runValidators: true}) 
// NEW - Opção para sempre que for atualizado, mostrar o objeto novo
// RUNVALIDATORS - opção para usar validators em todos os metodos (ex: os campos required: true, na db)
BillingCycle.after('post', errorHandler).after('put', errorHandler) // Unindo errorHandler, com metodos

//Configuração de um contador
// Como a rota billingCycle já esta registrada em routes, não é nescessario registrar isso denovo.
// Lembrando que o 'count' esta dentro de billingCycle, entao a rota seria api/billingCycles/count
BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]}) //Colocando erro em um objeto json
        } else {
            res.json({value}) // O value seria a quantidade de objetos que existe dentro de billingCycle
        }
    })
})

// Pipeline para agregação - manipulação de dados em json

// Ao fazer: 
// $group: {_id: YEAR, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
// Ele faria o resultado de credito e debito agrupados por YEAR

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{ // Criou duas novas variaveis, credit e debt (objeto novo)
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} //O que sera extraido do billingCycles, "nome do atributo.value"
    }, { // Na linha abaixo, está criando um novo objeto que agrupa todos os objetos tirados acima. OBS: "$credit" referencia o credit criado com $project na linha acima
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, { // Na linha abaixo, esta setando false para id e true para credit e debt, para aparecer
        $project: {_id: 0, credit: 1, debt: 1}
    }], (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {credit: 0, debt: 0})
        }
    })
})

module.exports = BillingCycle