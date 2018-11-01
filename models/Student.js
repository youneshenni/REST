const mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')

const StudentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    birthDate: Date,
    town: String,
    promotion: Number,
})

StudentSchema.plugin(timestamp)


const Student = mongoose.model('Student', StudentSchema)
module.exports = Student