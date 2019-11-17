import axios from 'axios'
import env from '~/env'

export const getHeaderFromOtp = (data) => {
  return axios.post(env.AUTH_SERVICE + '/verify/otp', data)
}

export const getOtp = (authCode) => {
  const config = {
    headers: {
      authcode: authCode
    }
  }
  return axios.get(env.AUTH_SERVICE + '/otp', config)
}
