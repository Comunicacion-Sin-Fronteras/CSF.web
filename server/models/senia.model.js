const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Senia = new Schema(
    {
        palabra: { type: String, required: true },
        URLImagen: { type: String, required: true },
        dificultad: {type: String, required: true},
        administradorNombre:{type: String, required: true},
        descripcion: { type: String, required: true },
        categoria: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('senias', Senia)