import axios from 'axios'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const getHeaderFromOtp = (data) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  }
  return axios.post(
    publicRuntimeConfig.AUTH_SERVICE + '/verify/otp',
    data,
    config,
  )
}

export const getOtp = (authCode, username) => {
  const config = {
    headers: {
      authcode: authCode,
      username: username,
    },
  }
  return axios.get(
    publicRuntimeConfig.AUTH_SERVICE + '/otp',
    config,
  )
}

export const checkConfirmData = (data) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  }
  return axios.post(
    publicRuntimeConfig.AUTH_SERVICE + '/confirm/scb',
    data,
    config,
  )
}

export const getQrcode = (username) => {
  const config = {
    headers: {
      apikey: publicRuntimeConfig.SCB_API,
      apisecret: publicRuntimeConfig.SCB_SECRET,
      resourceOwnerId: publicRuntimeConfig.SCB_API,
      requestUId: username,
      'response-channel': 'mobile',
      endState: 'mobile_app',
      'accept-language': 'EN',
    },
  }
  axios.get(
    `https://api-sandbox.partners.scb/partners/sandbox/v2/oauth/authorize?username=${username}"`,
    config,
  )
}
