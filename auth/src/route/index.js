import { Router } from 'express'
import loginController from '../controller/auth/loginController'
import registerController from '../controller/auth/registerController'
import generateOtpController from '../controller/auth/generateOtpController'
import verifyOtpForConfirmDataController from '../controller/auth/verifyOtpForConfirmDataController'
import confirmDataController from '../controller/auth/confirmDataController'
import checkAuthenController from '../controller/auth/checkAuthenController'
import { requireJWTAuth } from '../middleware/authorize'
import { lending } from './lending'
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
router.use([login, register, user, getOtp, scbVerifyOtp, confirmDataScb])

export default router

// GET /		Check authorization / get detail user
// POST /login
// POST /register
// POST /otp	Generate OTP code
// POST /verify/otp	Verify user OTP code
// POST /confirm/scb	Verify user detail and save on database
// POST /card	Add debit card
