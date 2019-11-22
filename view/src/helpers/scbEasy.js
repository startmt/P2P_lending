import axios from 'axios'
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const getHeaderFromOtp = (data) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }
  return axios.post(publicRuntimeConfig.AUTH_SERVICE + '/verify/otp', data,config)
}

export const getOtp = (authCode) => {
  const config = {
    headers: {
      authcode: authCode
    }
  }
  return axios.get(publicRuntimeConfig.AUTH_SERVICE + '/otp', config)
}

export const checkConfirmData = (data) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }
  return axios.post(publicRuntimeConfig.AUTH_SERVICE + '/confirm/scb', data,config)
}