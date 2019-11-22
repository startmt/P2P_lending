import {
    generateOtp,
    getToken
  } from '../service/scbVerifyService'
  import {
    status400,
    status200,
  } from '../utils/status'
  export default async (req, res) => {
    const authCode = req.headers.authcode
    if(authCode){
      const tokenScb = await getToken(authCode)
      if(tokenScb.status == 200){
        const data = {
          refreshToken: tokenScb.data.data.refreshToken
          }
        const otpPassword = await generateOtp(data)
        if(otpPassword > 0){
          status200(res, {
            otp: otpPassword
          })
        }else{
          status400(res)
        }
      }
      else {
        status400(res)
      }
    }else{
      status400(res)
    }
    

  }
  