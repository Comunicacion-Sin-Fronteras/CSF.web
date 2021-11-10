const express = require('express')

const generalController = require('../controllers/senia.controller')

const router = express.Router()

router.post('/senia', generalController.createSenia)
router.put('/senia/:id', generalController.updateSenia)
router.delete('/senia/:id', generalController.deleteSenia)
router.get('/senia/:id', generalController.getSeniaById)
router.get('/senia', generalController.getSenias)

module.exports = router