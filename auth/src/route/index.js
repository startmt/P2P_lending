import { Router } from 'express'
import loginController from '../controller/loginController'
import registerController from '../controller/registerController'
import { requireJWTAuth } from '../middleware/authorize'
const router = Router()

const user = router.get('/', requireJWTAuth, (req, res) => {res.end()})
const login = router.post('/login', loginController)
const register = router.post('/register', registerController)

router.use(login)
router.use(register)
router.use(user)

export default router