module.exports = (req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*') //com * significa que permite todas 
    res.header('Acess-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}