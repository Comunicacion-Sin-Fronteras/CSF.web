const juego = require('../models/senia.model')
const Contenido = require('../models/Contenido.model')

getSeniasbyDif = async (req, res) => { 
    // Get the count of all users
    juego.count().exec(function (err, count) {

        // Get a random entry
        var random = Math.floor(Math.random() * count)

        // Again query all users but only fetch one offset by our random #
        juego.find({ Dificultad: 'easy' }).limit(5).skip(random).exec(
            function (err, result) {
                // Tada! random user
                return res.status(200).json({ success: true, data: result })
                if (err) {
                    return res.status(400).json({ success: false, error: err })
                }
            })
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
    })
}



module.exports = {
    getSeniasbyDif
}