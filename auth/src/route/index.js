import { Router } from 'express'
import loginController from '../controller/loginController'
import registerController from '../controller/registerController'
import logoutController from '../controller/logoutController'
import generateOtpController from '../controller/generateOtpController'
import verifyOtpController from '../controller/verifyOtp'
import { requireJWTAuth } from '../middleware/authorize'
const router = Router()

const user = router.get('/', (req, res) => (console.log(req.headers),res.end()))
const login = router.post('/login', loginController)
const register = router.post('/register', registerController)
const logout = router.post('/logout', logoutController)
const getOtp = router.get('/otp', generateOtpController)
const scbVerifyOtp = router.post('/verify/otp', verifyOtpController)
router.use([login, register, user, logout, getOtp, scbVerifyOtp])

export default router