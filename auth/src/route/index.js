import { Router } from 'express'
import loginController from '../controller/loginController'
import registerController from '../controller/registerController'
import logoutController from '../controller/logoutController'
import generateOtpController from '../controller/generateOtpController'
import verifyScbController from '../controller/verifyScbController'

import { requireJWTAuth } from '../middleware/authorize'
const router = Router()

const user = router.get('/', (req, res) => (console.log(req.headers),res.end()))
const login = router.post('/login', loginController)
const register = router.post('/register', registerController)
const logout = router.post('/logout', logoutController)
const getOtp = router.get('/otp', generateOtpController)
const scbVerify = router.get('/verify', verifyScbController)
router.use([login, register, user, logout, getOtp, scbVerify])

export default router