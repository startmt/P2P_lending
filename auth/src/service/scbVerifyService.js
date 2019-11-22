import { getInstance } from '../redis'
import env from '../config'
import otpGenerator  from 'otp-generator'
import axios from 'axios'
import { rejects } from 'assert'
import userModel from '../model/user'
const redisClient = getInstance()

export const getToken = async (authCode) => {
    const res = await axios.post(
        'https://api-sandbox.partners.scb/partners/sandbox/v1/oauth/token',
        {
          applicationKey: env.SCB_API,
          applicationSecret: env.SCB_SECRET,
          authCode: authCode,
        },
        {
          headers: {
            resourceOwnerId: env.SCB_API,
            requestUId: "aowwaikon",
            'response-channel': 'mobile',
            endState: 'mobile_app',
            'accept-language': 'EN',
          },
        },
      ).catch(err=> ( err.response))
    return res
}

export const generateOtp = async (data, username) => {
    let otpPassword = otpGenerator.generate(6, {alphabets: false, upperCase: false, specialChars: false })
    redisClient.get(otpPassword, function (err,reply) {
        reply != null ? generateOtp() : redisClient.set(otpPassword+username, JSON.stringify(data),'EX', 310)
    })
    return otpPassword
}

export const verifyOtpForConfirm = async (otpCode, username) => {
  try{
    let token = await redisClient.getAsync(otpCode+username)
    token = JSON.parse(token)
    await userModel.updateOne(
      {
        username:username
      },{
        scbId: token.resourceOwnerId
    })
    await redisClient.setAsync(username+'refresh', token.refreshToken, 'EX', token.refreshExpiresIn)
    await redisClient.setAsync(username+'access', token.accessToken, 'EX', token.expiresIn)
    return {
      status: 200,
    }
  }catch(e){
    console.log(e)
    return null
  }
  
  // const headers = {
  //   resourceOwnerId:token.resourceOwnerId,
  //   requestUId:token.requestUId,
  //   "accept-language": token['accept-language'],
  //   authorization: token.accessToken 
  // }
  // if(token){
  //   const config = {
  //     headers: headers
  //   }
  //     return await axios.get(
  //       'https://api-sandbox.partners.scb/partners/sandbox/v2/customers/profile',
  //         config
  //     ).then(res=>(
  //       res.data.data.profile.thaiFirstName == data.firstname 
  //       && res.data.data.profile.thaiLastName == data.lastname 
  //       && res.data.data.profile.citizenID == data.citizenId 
  //       ? res : rejects()
  //     )).catch(err=>{
  //       return err.response})
  // }

}

export const verifyOtp = async (otpCode, username) => {
  const refreshToken = redisClient.getAsync(otpCode).then(function(res) {
    console.log(res)
}).catch(err=>'Error');
  const isUpdate = await userModel.updateOne(
    {
      username:username
    },{
    scbRefresh: refreshToken
  })
  if(isUpdate) return "success"
  }

