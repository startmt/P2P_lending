import axios from 'axios'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
export const loadingTransactionApi = () => {
  return axios.get(
    publicRuntimeConfig.TRANSACTION_SERVICE + '/loading',
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          'token',
        )}`,
      },
    },
  )
}
