const BillingCycle = require('./billingCycle') //Pegou a referencia da Database e Schemas

BillingCycle.methods(['get', 'post', 'put', 'delete']) //Metodos que utilizarei nestes esquemas
BillingCycle.uptadeOptions({new: true, runValidators: true}) 
// NEW - Opção para sempre que for atualizado, mostrar o objeto novo
// RUNVALIDATORS - opção para usar validators em todos os metodos (ex: os campos required: true, na db)

module.exports = BillingCycle