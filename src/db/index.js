require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_HOST, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.Promise = global.Promise

mongoose.connection.once('open', () => {
    console.log("MongoDB On.")
})


module.exports = mongoose
