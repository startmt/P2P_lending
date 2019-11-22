import axios from 'axios'
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const getHeaderFromOtp = (data) => {
  const config = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0YXJ0IiwiaWF0IjoxNTc0NDQ2ODc0LCJleHAiOjE1NzQ0NTA0NzR9.F2bEkXDWmBQkeiuKjvQJz-7QXBrADdzmRmmawv9YsaQ'
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
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0YXJ0IiwiaWF0IjoxNTc0NDQ2ODc0LCJleHAiOjE1NzQ0NTA0NzR9.F2bEkXDWmBQkeiuKjvQJz-7QXBrADdzmRmmawv9YsaQ'
    }
  }
  return axios.post(publicRuntimeConfig.AUTH_SERVICE + '/verify/otp', data,config)
}