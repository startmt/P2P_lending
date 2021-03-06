import axios from 'axios'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
export const createPaymentUrl = (data) => {
  return axios.post(
    publicRuntimeConfig.TRANSACTION_SERVICE + '/payment',
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

export const withdrawnApi = (data) => {
  return axios.post(
    publicRuntimeConfig.TRANSACTION_SERVICE + '/withdrawn',
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
