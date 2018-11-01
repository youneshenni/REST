const mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')

const StudentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthDate: Date,
    town: String,
    Promotion: Number,
})

StudentSchema.plugin(timestamp)


const Student = mongoose.model('Student', StudentSchema)
module.exports = Student