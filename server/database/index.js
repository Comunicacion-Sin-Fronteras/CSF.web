const mongoose = require('mongoose')
require("dotenv").config()

const url = process.env.MONGO_DB_CONNECTION_STRING;

mongoose
    .connect(url, { useNewUrlParser: true }).then(
        console.info("mongo connected at:" + url)
    )
    .catch(e => {
        console.error('Connection error:', e.message)
        // console.error(`mongo: ${url}`)
    })

const db = mongoose.connection

module.exports = db