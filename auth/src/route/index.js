import { Router } from 'express'
import loginController from '../controller/loginController'
import registerController from '../controller/registerController'
import logoutController from '../controller/logoutController'
import { requireJWTAuth } from '../middleware/authorize'
const router = Router()

const user = router.get('/', requireJWTAuth, (req, res) => {res.end()})
const login = router.post('/login', loginController)
const register = router.post('/register', registerController)
const logout = router.post('/logout', logoutController)
router.use([login, register, user, logout])

export default router