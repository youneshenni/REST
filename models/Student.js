const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthDate: Date,
    town: String,
    Promotion: Number,
})
Student = mongoose.model('Student', StudentSchema)
module.exports = Student