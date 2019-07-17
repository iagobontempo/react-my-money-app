const BillingCycle = require('./billingCycle') //Pegou a referencia da Database e Schemas

BillingCycle.methods(['get', 'post', 'put', 'delete']) //Metodos que utilizarei nestes esquemas
BillingCycle.updateOptions({new: true, runValidators: true}) 
// NEW - Opção para sempre que for atualizado, mostrar o objeto novo
// RUNVALIDATORS - opção para usar validators em todos os metodos (ex: os campos required: true, na db)

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

module.exports = BillingCycle