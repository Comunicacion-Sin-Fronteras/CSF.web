const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Administrador = new Schema(
    {
        nombre: { type: String, required: true },
        correo_Electronico: { type: String, required: true },
        Fecha_de_Nacimiento: {type: String, required: true},
        contraseña:{type: String, required: true},
        nombreAdminRegistra: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Administradores',Administrador);