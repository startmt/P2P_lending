import {
    generateOtp,
    getToken
  } from '../../service/auth/scbVerifyService'
import {
    status400,
    status200,
} from '../../utils/status'
export default async (req, res) => {
    const authCode = req.headers.authcode
    const username = req.headers.username
    if(authCode && username){
      const tokenScb = await getToken(authCode)
      if(tokenScb.status == 200){
        let data = {
          resourceOwnerId: tokenScb.headers.resourceownerid,
          requestUId: tokenScb.headers.resourceownerid,
          'accept-language': 'EN',
          }
          Object.assign(data, tokenScb.data.data) 
        const otpPassword = await generateOtp(data, username)
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
  