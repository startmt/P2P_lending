import {
    verifyOtp
} from '../service/scbVerifyService'
import {
    status400,
    status200,
} from '../utils/status'
import { getInstance } from '../redis'
const redisClient = getInstance()
export default async (req, res) => {
    const otpCode = req.body.otp
    const username = req.authInfo.username
    const scbData = await verifyOtp(otpCode, username)
    if (scbData) {
        console.log(scbData)
        // redisClient.del(otpCode)
        status200(res, {
            data: scbData
        })
    }
    else {
        status400(res)
    }
}