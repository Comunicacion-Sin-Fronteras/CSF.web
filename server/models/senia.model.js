const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Senia = new Schema(
    {
        Palabra: { type: String, required: true },
        URL_Imagen: { type: String, required: true },
        Dificultad: {type: String, required: true},
        Nombre_Administrador:{type: String, required: true},
        Descripcion: { type: String, required: true },
        Categoria: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Senia', Senia)