import axios from 'axios'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const register = (username, password, role) => {
  const data = {
    username,
    password,
    role,
  }
  return axios.post(
    publicRuntimeConfig.AUTH_SERVICE + '/register',
    data,
  )
}

export const login = (username, password) => {
  const data = {
    username,
    password,
  }
  return axios.post(
    publicRuntimeConfig.AUTH_SERVICE + '/login',
    data,
  )
}

export const checkAuth = () => {
  const config = {
    headers: {
      Authorization:
        'Bearer ' + localStorage.getItem('token'),
    },
  }
  return axios.get(
    publicRuntimeConfig.AUTH_SERVICE + '/',
    config,
  )
}
