const errors = require('restify-errors')
const Student = require('../models/Student.js')

module.exports = server => {

    server.get('/students/', (req, res, next) => {
        Student.find(req.params, (err, documents) => {
            if (err) return console.error(err)
            res.send(documents)
        })
        next()
    })

    server.get('/students/:firstName', (req, res, next) => {
        Student.find(req.params, (err, documents) => {
            if (err) return console.error(err)
            res.send(documents)
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
    //PUT   DELETE
    server.put('/students/:id', (req, res, next) => {
        if (!req.is('application/json')) {
            return next(new errors.InvalidContentError('application/json format expected'))
        }
        try {
            var student = Student.findOneAndUpdate({ _id: req.params.id}, req.body)
            student.save()
            res.send(200)
            next()
        } catch (err) {
            return next(new errors.ResourceNotFoundError(`There is no Student with ${req.params.id} as ID`))
        }
    })

    server.del('/students/:_id', (req, res, next) => {
        try {
            var student = Student.findOneAndRemove(req.params)
            res.send(204)
            next()
        } catch (err) {
            return next(new errors.ResourceNotFoundError(`There is no Student with ${req.params.id} as ID`))
        }

        })
}