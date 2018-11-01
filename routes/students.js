const errors = require('restify-errors')
const Student = require('../models/Student.js')

module.exports = server => {

    server.get('/students/:firstName', (req, res, next) => {
        Student.find(req.params, (err, documents) => {
            if (err) return console.error(err)
            res.send(documents)
            next(new errors.InvalidContentError(err))
        })
        next()
    })
    server.post('/students', (req, res, next) => {
        //Check if it's in JSON format
        if (!req.is('application/json')) {
            return next(new errors.InvalidContentError('application/json format expected'))
        }
        var newStudent = new Student(req.body)
        newStudent.save(err => {if (err) return console.error(err)})
        res.send(201)
    })
    server.put('/students/:id')
}