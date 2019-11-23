import { Router } from 'express'
import loginController from '../controller/loginController'
import registerController from '../controller/registerController'
import logoutController from '../controller/logoutController'
import generateOtpController from '../controller/generateOtpController'
import verifyOtpForConfirmDataController from '../controller/verifyOtpForConfirmDataController'
import confirmDataController from '../controller/confirmDataController'
import { requireJWTAuth } from '../middleware/authorize'
const router = Router()

const user = router.get('/auth/', (req, res) => (console.log(req.headers),res.end()))
const login = router.post('/auth/login', loginController)
const register = router.post('/auth/register', registerController)
const logout = router.post('/auth/logout', logoutController)
const getOtp = router.get('/auth/otp', requireJWTAuth, generateOtpController)
const scbVerifyOtp = router.post('/auth/verify/otp', requireJWTAuth, verifyOtpForConfirmDataController)
const confirmDataScb = router.post('/auth/confirm/scb', requireJWTAuth, confirmDataController)
router.use([login, register, user, logout, getOtp, scbVerifyOtp, confirmDataScb])

export default router