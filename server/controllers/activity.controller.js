const Historial = require('../models/historial.model')
const Contenido = require('../models/Contenido.model')

getActivityHistory = async (req, res) => {
    const historial = await Historial.find({ Nombre_Usuario: req.query.Nombre_Usuario })
    if (!historial) {
        return res.status(200).json({
            success: true,
            message: 'No se ha Realizado ninguna Actividad'
        })
    }
    return res.status(200).json({
        success: true,
        message: "Conexion Exitosa",
        data: historial
    })
}

addActivityToHistory = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'No se enviaron datos',
        })
    }

    const historial = new Historial()
    historial.Fecha_de_Realizacion = body.Fecha_de_Realizacion
    historial.Tipo_de_Actividad = body.Tipo_de_Actividad
    historial.Dificultad = body.Dificultad
    historial.Calificacion = body.Calificacion
    historial.Nombre_Usuario = body.Nombre_Usuario

    historial.save()
        .then(result => {
            historyresult = result
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Problema al guardar Actividad',
            })
        })

    body.Palabras.map(
        Palabra => {
            const contenido = new Contenido()

            contenido.ID_Actividad = historial._id
            contenido.Palabra = Palabra
            contenido.Nombre_Usuario = body.Nombre_Usuario
            
            contenido.save()
            .then(result => {
            })
            .catch(error => {
                return res.status(400).json({
                error: error,
                message: 'Problema al guardar palabra',
            })
            })
        }
    )

    return res.status(200).json({
        success: true,
        message: "Actividad guardada con Exito"
    })
}

module.exports = {
    getActivityHistory,
    addActivityToHistory
}