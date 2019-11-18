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
          resourceOwnerId: tokenScb.headers.resourceownerid,
          authorization: 'Bearer '+ tokenScb.data.data.accessToken,
          requestUId: tokenScb.headers.resourceownerid,
          'accept-language': 'EN'
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
  