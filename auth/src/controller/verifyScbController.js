import {
    getDataFromScb
  } from '../service/scbVerifyService'
  import {
    status400,
    status200,
  } from '../utils/status'
  export default async (req, res) => {
    const otpCode = req.body.otp
    const scbData = await getDataFromScb(otpCode)
    
    if(scbData.status == 200){
        status200(res, scbData.data.data)
    }
    else{
        status400(res)
    }

  }