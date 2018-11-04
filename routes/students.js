const errors = require('restify-errors')
const Student = require('../models/Student.js')

module.exports = server => {

    server.get('/students/', (req, res, next) => {
        //Student.findOneAndRemove({firstName: "Haythem"})
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
        Student.findByIdAndUpdate(req.params.id.trim(), req.body, (err, user) => {
            if(err) console.error(err);
            
            console.log(user);
            
            res.send(200)
        })
        next()

    })

    server.del('/students/:id', (req, res, next) => {
        return Student.findOneAndDelete({_id: req.params.id}, (user) => {
            return res.send(204)            
        })
    })
}