const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Contenido = new Schema(
    {
        ID_Actividad: { type: String, required: true },
        Palabra: { type: String, required: true },
        Nombre_Usuario: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Contenido', Contenido)