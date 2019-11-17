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
    const scbData = await verifyOtp(otpCode)
    
    if(scbData){
        redisClient.del(token)
        status200(res, scbData)
    }
    else{
        status400(res)
    }

  }