const juego = require('../models/senia.model')
const Contenido = require('../models/Contenido.model')

getSeniasbyDifEasy = async (req, res) => { 

    juego.count().exec(function (err, count) {

        var random = Math.floor(Math.random() * count)

        //Cual podria ser el valor maximo?
        juego.find({ Dificultad: 'easy' }).limit(5).skip(random).exec(
            function (err, result) {
                
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

getSeniasbyDifMed = async (req, res) => {

    juego.count().exec(function (err, count) {

        var random = Math.floor(Math.random() * count)

        //Cual podria ser el valor maximo?
        juego.find({ Dificultad: 'medium' }).limit(5).skip(random).exec(
            function (err, result) {

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

getSeniasbyDifHard = async (req, res) => {

    juego.count().exec(function (err, count) {

        var random = Math.floor(Math.random() * count)

        //Cual podria ser el valor maximo?
        juego.find({ Dificultad: 'hard' }).limit(5).skip(random).exec(
            function (err, result) {

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
    getSeniasbyDifEasy,
    getSeniasbyDifMed,
    getSeniasbyDifHard,
}