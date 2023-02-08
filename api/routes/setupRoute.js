const { Router } = require('express')
const SetupController = require('../controllers/SetupController')

const router = Router()

router.get('/setup', SetupController.pegaTodoSetup)

module.exports = router