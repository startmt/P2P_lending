import { Router } from 'express'
import loginController from '../controller/loginController'
import registerController from '../controller/registerController'
import generateOtpController from '../controller/generateOtpController'
import verifyOtpForConfirmDataController from '../controller/verifyOtpForConfirmDataController'
import confirmDataController from '../controller/confirmDataController'
import checkAuthenController from '../controller/checkAuthenController'
import { requireJWTAuth } from '../middleware/authorize'
const router = Router()

const user = router.get('/auth/',requireJWTAuth, checkAuthenController)
const login = router.post('/auth/login', loginController)
const register = router.post('/auth/register', registerController)
const getOtp = router.get('/auth/otp', generateOtpController)
const scbVerifyOtp = router.post('/auth/verify/otp', requireJWTAuth, verifyOtpForConfirmDataController)
const confirmDataScb = router.post('/auth/confirm/scb', requireJWTAuth, confirmDataController)
router.use([login, register, user, getOtp, scbVerifyOtp, confirmDataScb])

export default router