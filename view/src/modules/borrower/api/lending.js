import axios from 'axios'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const getMyLendingListApi = () => {
  return axios.get(
    publicRuntimeConfig.LENDING_SERVICE + '/my',
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          'token',
        )}`,
      },
    },
  )
}

export const getLendingList = () => {
  return axios.get(
    publicRuntimeConfig.LENDING_SERVICE + '/',
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          'token',
        )}`,
      },
    },
  )
}

export const getLendingDataApi = (id) => {
  return axios.get(
    publicRuntimeConfig.LENDING_SERVICE + '/borrower/' + id,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          'token',
        )}`,
      },
    },
  )
}
