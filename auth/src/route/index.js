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
import addBankController from '../controller/auth/addBankController'
const router = Router()

const user = router.get('/api/auth/', requireJWTAuth, checkAuthenController)
const login = router.post('/api/auth/login', loginController)
const register = router.post('/api/auth/register', registerController)
const getOtp = router.get('/api/auth/otp', generateOtpController)
const addBank = router.post('/api/auth/bank', requireJWTAuth, addBankController)
const scbVerifyOtp = router.post(
  '/api/auth/verify/otp',
  requireJWTAuth,
  verifyOtpForConfirmDataController,
)
const confirmDataScb = router.post(
  '/api/auth/confirm/scb',
  requireJWTAuth,
  confirmDataController,
)
lending(router)
transaction(router)
router.use([
  login,
  register,
  user,
  getOtp,
  scbVerifyOtp,
  confirmDataScb,
  addBank,
])

export default router

// GET /		Check authorization / get detail user
// POST /login
// POST /register
// POST /otp	Generate OTP code
// POST /verify/otp	Verify user OTP code
// POST /confirm/scb	Verify user detail and save on database
// POST /card	Add debit card
