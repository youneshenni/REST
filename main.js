const mongoose = require('mongoose');
const restify = require('restify');
const config = require('./config')
const server = restify.createServer()

//MIDDLEWARE
server.use(restify.plugins.bodyParser())

server.listen(config.PORT, () => {
    mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true}
        )
})
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:\n'));
db.once('open', () => {
    //Routes
    require('./routes/students')(server);
    console.log(`Server started on port ${config.PORT}`)
});