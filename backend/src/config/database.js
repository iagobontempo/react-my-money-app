const mongoose = require('mongoose')
mongoose.Promise = global.Promise 

module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatorio." //Apenas mensagem de erro caso nào atenda os requires na hora do post.
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite minimo de '{MIN}'." 
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite maximo de '{MAX}'." 
mongoose.Error.messages.String.enum = "'{VALUE}' não é valido para o atributo '{PATH}'." 
