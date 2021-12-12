const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const passportLocalMongoose = require("passport-local-mongoose")
// Reference for auth: https://www.codingdeft.com/posts/react-authentication-mern-node-passport-express-mongo/#implementing-the-server-side

const Session = new Schema({
    refreshToken: {
        type: String,
        default: "",
    },
})
const Usuario = new Schema(
    {
        nombre: { type: String, required: false },
        username: { type: String, required: true, index: { unique: true } }, //email
        correo_Electronico: { type: String, required: false },
        Fecha_de_Nacimiento: { type: String, required: false },
        sexo: { type: String, required: false },
        // password: { type: String, required: true },
        authStrategy: {
            type: String,
            default: "local",
        }, refreshToken: {
            type: [Session],
        },EmailToken:{
            type: String, required: false
        }
    },
    { timestamps: true },
)

//Remove refreshToken from the response
Usuario.set("toJSON", {
Usuariotransform: function (doc, ret, options) {
        delete ret.refreshToken
        return ret
    },
})

Usuario.plugin(passportLocalMongoose)


module.exports = mongoose.model('Usuario', Usuario);