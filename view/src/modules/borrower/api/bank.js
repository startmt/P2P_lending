import axios from 'axios'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const getBank = (state = '') => {
  return axios.get(
    `${publicRuntimeConfig.AUTH_SERVICE}/bank?state=${state}`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          'token',
        )}`,
      },
    },
  )
}

export const addBank = (data) => {
  return axios.post(
    publicRuntimeConfig.AUTH_SERVICE + '/bank',
    data,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          'token',
        )}`,
      },
    },
  )
}
