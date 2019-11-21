import axios from 'axios'
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const getHeaderFromOtp = (data) => {
  return axios.post(publicRuntimeConfig.AUTH_SERVICE + '/verify/otp', data)
}

export const getOtp = (authCode) => {
  const config = {
    headers: {
      authcode: authCode
    }
  }
  return axios.get(publicRuntimeConfig.AUTH_SERVICE + '/otp', config)
}
