const express = require('express')

const generalController = require('../controllers/senia.controller')
const AdminController = require('../controllers/administrador.controller')
const ActivityController = require('../controllers/activity.controller')
const JuegoController = require('../controllers/juego.controller')

const router = express.Router()

router.post('/senia', generalController.createSenia)
router.put('/senia/:id', generalController.updateSenia)
router.delete('/senia/:id', generalController.deleteSenia)
router.get('/senia/:id', generalController.getSeniaById)
router.get('/senia', generalController.getSenias)

router.post('/admin',AdminController.createNewAdmin)
router.put('/admin',AdminController.updateDataAdmin)
router.delete('/admin',AdminController.deleteAdmin)
router.get('/admin', AdminController.getDataAdmin)
router.get('/alladmins', AdminController.getAllAdmins)

router.post('/activities', ActivityController.addActivityToHistory)
router.get('/activities', ActivityController.getActivityHistory)
router.get('/activity', ActivityController.getHistoryContent)

router.get('/game/easy', JuegoController.getSeniasbyDifEasy)
router.get('/game/medium', JuegoController.getSeniasbyDifMed)
router.get('/game/hard', JuegoController.getSeniasbyDifHard)

module.exports = router