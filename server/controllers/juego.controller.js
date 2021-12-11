const juego = require('../models/senia.model')

getSeniasbyDifEasy = async (req, res) => { 

    juego.count({ Dificultad: 'easy' }).exec(function (err, count) {

        juego.aggregate([
            { $match: { Dificultad: 'easy' } },
            { $sample: { size: 5 } }
        ], function (err, result) {
                
                return res.status(200).json({ count, success: true, data: result })
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

    juego.count({ Dificultad: 'medium' }).exec(function (err, count) {

        juego.aggregate([
            { $match: { Dificultad: 'medium' } },
            { $sample: { size: 5 } }
        ],  function (err, result) {

                return res.status(200).json({count, success: true, data: result })
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

    juego.count({ Dificultad: 'hard' }).exec(function (err, count) {

        juego.aggregate([
            { $match: { Dificultad: 'hard' } },
            { $sample: { size: 5 } }
        ], function (err, result) {

                return res.status(200).json({ count, success: true, data: result })
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