var mongoose = require('mongoose');
var restify = require('restify');
mongoose.connect(`mongodb://localhost/mongo`);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:\n'));
db.once('open', function() {
    console.log(`We are connected to Database ${db_name}`)
});
var Scheme = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthDate: Date,
    town: String,
    Promotion: Number,
})
Student = mongoose.model('Student', Scheme)
Younes = Student({
    firstName: 'Younes',
    lastName: 'Henni', 
    birthDate: new Date('2000-09-02T01:00:00'),
    town: 'Tenes',
    Promotion: 42
})
Younes.save()
var server = restify.createServer();
function respond(req, res, next) {  
    Student.find(req.params, (err, documents) => {
        if (err) return console.error(err);
        res.send(documents)
    })
    next();
}
server.get('/read/:firstName', respond);
server.head('/read/:firstName', respond);

server.listen(8000 , () => {
    console.log('%s listening at %s', server.name, server.url)
});