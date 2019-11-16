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

export const getDataFromScb = async (headers) => {
  axios.get(
    'https://api-sandbox.partners.scb/partners/sandbox/v1/customers/profile', {headers: headers}
  ).then(res=>(res.data)).catch(err=>err)
}
