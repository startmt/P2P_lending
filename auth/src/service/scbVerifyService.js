import { getInstance } from '../redis'
import env from '../config'
import otpGenerator  from 'otp-generator'
import axios from 'axios'
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

export const generateOtp = async (data) => {
    let otpPassword = otpGenerator.generate(6, {alphabets: false, upperCase: false, specialChars: false })
    redisClient.get(otpPassword, function (err,reply) {
        reply != null ? generateOtp() : redisClient.set(otpPassword, JSON.stringify(data),'EX', 310)
    })
    return otpPassword
}

export const verifyOtp = async (otpCode) => {
  return await redisClient.getAsync(otpCode)
}

export const getDataFromScb = async (headers) => {
  const config = {
    headers: JSON.parse(headers)
  }
    return await axios.get(
      'https://api-sandbox.partners.scb/partners/sandbox/v2/customers/profile',
        config
    ).then(res=>(res)).catch(err=>{
      return err.response})
}
