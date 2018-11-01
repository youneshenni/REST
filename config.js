module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 8080,
    URL: process.env.BASE_URL || 'http://localhost:8080',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/mongo'
}