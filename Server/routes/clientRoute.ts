import { getClient, getClients } from '../controllers/clientController'
import { Router } from 'express'

const router = Router()

router.get('/', getClients)
router.get('/:id', getClient)

export default router