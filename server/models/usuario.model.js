const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Usuario = new Schema(
    {
        Nombre_Usuario: { type: String, required: true },
        Correo_Electronico: { type: String, required: true },
        Fecha_de_Nacimiento: { type: Date, required: true},
        Sexo:{type: String, required: true},
        Contraseña:{type: String, required: true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('Usuario', Usuario)