const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Senia = new Schema(
    {
        nombre: { type: String, required: true },
        URLImagen: { type: String, required: true },
        descripcion: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('senias', Senia)