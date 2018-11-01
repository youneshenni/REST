const errors = require('restify-errors')
const Student = require('../models/Student.js')

module.exports = server => {

    server.get('/students/:firstName', (req, res, next) => {
        Student.find(req.params, (err, documents) => {
            if (err) return console.error(err)
            res.send(documents)
        })
        next()
    })   
}