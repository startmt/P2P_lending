import { Router } from 'express'
import loginController from '../controller/auth/loginController'
import registerController from '../controller/auth/registerController'
import generateOtpController from '../controller/auth/generateOtpController'
import verifyOtpForConfirmDataController from '../controller/auth/verifyOtpForConfirmDataController'
import confirmDataController from '../controller/auth/confirmDataController'
import checkAuthenController from '../controller/auth/checkAuthenController'
import { requireJWTAuth } from '../middleware/authorize'
import { lending } from './lending'
import { transaction } from './transaction'
const router = Router()

const user = router.get('/auth/', requireJWTAuth, checkAuthenController)
const login = router.post('/auth/login', loginController)
const register = router.post('/auth/register', registerController)
const getOtp = router.get('/auth/otp', generateOtpController)
const scbVerifyOtp = router.post(
  '/auth/verify/otp',
  requireJWTAuth,
  verifyOtpForConfirmDataController,
)
const confirmDataScb = router.post(
  '/auth/confirm/scb',
  requireJWTAuth,
  confirmDataController,
)
lending(router)
transaction(router)
router.use([login, register, user, getOtp, scbVerifyOtp, confirmDataScb])

export default router
