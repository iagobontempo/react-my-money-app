const _ = require('lodash')

//Gerenciando erros
module.exports = (req, res, next) => {
    const bundle = res.locals.bundle // Local onde a lista de erros ficam

    //Extraindo as mensagens de erro \/
    if(bundle.errors) {
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}