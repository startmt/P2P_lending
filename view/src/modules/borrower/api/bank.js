import axios from 'axios'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const getBank = () => {
  return axios.get(
    publicRuntimeConfig.AUTH_SERVICE + '/bank',
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          'token',
        )}`,
      },
    },
  )
}
