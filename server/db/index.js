const mongoose = require('mongoose');

const connectionString = process.env.MONGO_URI


const mongoURL = 'mongodb://mongo:27017/cinema'

mongoose.connect(mongoURL, { useNewUrlParser: true })
.catch((err) => {
   console.error('Connection error', err.message)
})

const db = mongoose.connection;

module.exports = db;