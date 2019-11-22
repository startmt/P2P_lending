import axios from 'axios'
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const getHeaderFromOtp = (data) => {
  const config = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0YXJ0IiwiaWF0IjoxNTc0NDUxNTQzLCJleHAiOjE1NzQ0NTUxNDN9.5ppjWFToZ6wexg0aEpdqxpiyY29QTjDXR2S_urYhIck'
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
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0YXJ0IiwiaWF0IjoxNTc0NDUxNTQzLCJleHAiOjE1NzQ0NTUxNDN9.5ppjWFToZ6wexg0aEpdqxpiyY29QTjDXR2S_urYhIck'
    }
  }
  return axios.post(publicRuntimeConfig.AUTH_SERVICE + '/confirm/scb', data,config)
}