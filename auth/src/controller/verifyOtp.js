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

    const data = {
      otpCode: req.body.otp,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      citizenId: req.body.citizenId
    }
    const scbData = await verifyOtp(data)
    if(scbData){
        // redisClient.del(otpCode)
        status200(res, scbData.data)
    }
    else{
        status400(res)
    }

  }