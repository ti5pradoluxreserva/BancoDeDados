import { Router } from 'express'
import { pegaTodoSetup, criaSetup } from '../controllers/SetupController'

const router = Router()

router.get('/setup', pegaTodoSetup)
router.post('/pessoas', criaSetup)

export default router