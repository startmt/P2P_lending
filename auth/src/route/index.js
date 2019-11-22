import { Router } from 'express'
import loginController from '../controller/loginController'
import registerController from '../controller/registerController'
import logoutController from '../controller/logoutController'
import generateOtpController from '../controller/generateOtpController'
import verifyOtpForConfirmDataController from '../controller/verifyOtpForConfirmDataController'
import generateOtpForRefreshController from '../controller/generateOtpForRefreshController'
import verifyOtpController from '../controller/verifyOtpController'
import { requireJWTAuth } from '../middleware/authorize'
const router = Router()

const user = router.get('/auth/', (req, res) => (console.log(req.headers),res.end()))
const login = router.post('/auth/login', loginController)
const register = router.post('/auth/register', registerController)
const logout = router.post('/auth/logout', logoutController)
const getOtp = router.get('/auth/otp', generateOtpController)
const scbVerifyOtp = router.post('/auth/verify/otp', verifyOtpForConfirmDataController)
const getOtpForRefresh = router.post('/auth/refresh/otp', generateOtpForRefreshController)
const verifyOtpForRefresh = router.post('/auth/verify/refresh/otp', requireJWTAuth, verifyOtpController)
router.use([login, register, user, logout, getOtp, scbVerifyOtp, getOtpForRefresh, verifyOtpForRefresh])

export default router