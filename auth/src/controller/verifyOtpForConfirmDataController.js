import {
  verifyOtpForConfirm
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
    const scbData = await verifyOtpForConfirm(otpCode, username)
    if(scbData){
        // redisClient.del(otpCode+username)
        status200(res, scbData)
    }
    else{
        status400(res)
    }

  }