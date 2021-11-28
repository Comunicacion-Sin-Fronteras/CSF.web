const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Administrador = new Schema(
    {
        Nombre_Administrador: { type: String, required: true },
        Correo_Electronico: { type: String, required: true },
        Fecha_de_Nacimiento: {type: Date, required: true},
        Contraseña:{type: String, required: true},
        NombreAdminRegistra: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Administrador',Administrador);