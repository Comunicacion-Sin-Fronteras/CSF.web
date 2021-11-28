const express = require('express')
const router = express.Router()

const generalController = require('../controllers/senia.controller')

//User
var userRoutes = require('./user')
router.get('/', function(){}).use('/user', userRoutes)
router.post('/senia', generalController.createSenia)
router.put('/senia/:id', generalController.updateSenia)
router.delete('/senia/:id', generalController.deleteSenia)
router.get('/senia/:id', generalController.getSeniaById)
router.get('/senia', generalController.getSenias)

module.exports = router