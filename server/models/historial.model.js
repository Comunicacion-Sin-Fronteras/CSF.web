const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Historial = new Schema(
    {
        Fecha_de_Realizacion: {type: Date, required: true},
        Tipo_de_Actividad: {type: String, required: true},
        Dificultad: { type:String, required: true},
        Calificacion: {type: Number, required: true},
        Nombre_Usuario: {type: String, required: true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('Historial', Historial)