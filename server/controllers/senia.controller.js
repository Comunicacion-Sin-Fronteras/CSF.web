const Senia = require('../models/senia.model')

createSenia = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a senia',
        })
    }

    const senia = new Senia(body)
    console.log(body);

    if (!senia) {
        return res.status(400).json({ success: false, error: err })
    }

    senia
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: senia._id,
                message: 'Senia created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Senia not created!',
            })
        })
        console.log(senia)
}

updateSenia = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Senia.findOne({ _id: req.params.id }, (err, senia) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Senia not found!',
            })
        }
        senia.nombre = body.nombre
        senia.URLImagen = body.URLImagen
        senia.descripcion = body.descripcion
        senia
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: senia._id,
                    message: 'Senia updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Senia not updated!',
                })
            })
    })
}

deleteSenia = async (req, res) => {
    await Senia.findOneAndDelete({ _id: req.params.id }, (err, senia) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!senia) {
            return res
                .status(404)
                .json({ success: false, error: `Senia not found` })
        }

        return res.status(200).json({ success: true, data: senia })
    }).catch(err => console.log(err))
}

getSeniaById = async (req, res) => {
    await Senia.findOne({ _id: req.params.id }, (err, senia) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!senia) {
            return res
                .status(404)
                .json({ success: false, error: `Senia not found` })
        }
        return res.status(200).json({ success: true, data: senia })
    }).catch(err => console.log(err))
}

getSenias = async (req, res) => {
    await Senia.find({}, (err, senias) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!senias.length) {
            return res
                .status(404)
                .json({ success: false, error: `Senia not found` })
        }
        return res.status(200).json({ success: true, data: senias })
    }).catch(err => console.log(err))
}

module.exports = {
    createSenia,
    updateSenia,
    deleteSenia,
    getSenias,
    getSeniaById,
}