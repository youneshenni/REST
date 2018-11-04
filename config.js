module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 51533,
    URL: process.env.BASE_URL || 'http://localhost:51533',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/igenergy'
}