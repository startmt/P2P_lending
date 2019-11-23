import axios from 'axios'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const register = (username, password, role) => {
  const data = {
    username,
    password,
    role,
  }
  console.log(data)
  return axios.post(
    publicRuntimeConfig.AUTH_SERVICE + '/register',
    data,
  )
}
