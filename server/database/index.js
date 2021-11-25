const mongoose = require('mongoose')

mongoose
    .connect('mongodb://superuser:admin@localhost:27017/ComunicacionSinFronteras?authSource=admin', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db