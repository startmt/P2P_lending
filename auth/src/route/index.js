import { Router } from 'express'
import loginController from '../controller/loginController'

const router = Router()


const login = router.post('/login', loginController)

router.use(login)

export default router