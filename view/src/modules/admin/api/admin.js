import axios from 'axios'
import getConfig from 'next/config'
import { Manner } from '../../../helpers/web3'
const { publicRuntimeConfig } = getConfig()

export const getInitRequestList = () => {
  const config = {
    headers: {
      Authorization:
        'Bearer ' + localStorage.getItem('token'),
    },
  }
  return axios.get(
    publicRuntimeConfig.LENDING_SERVICE + '/admin',
    config,
  )
}

export const getMannerFromWeb3 = (address) => {
  return Manner(address)
    .methods.user()
    .call()
}
export const getInitRequestData = (id) => {
  const config = {
    headers: {
      Authorization:
        'Bearer ' + localStorage.getItem('token'),
    },
  }
  return axios.get(
    publicRuntimeConfig.LENDING_SERVICE + `/admin/${id}`,
    config,
  )
}

export const confirmInitRequest = (id, state) => {
  const config = {
    headers: {
      Authorization:
        'Bearer ' + localStorage.getItem('token'),
    },
  }
  return axios.post(
    publicRuntimeConfig.LENDING_SERVICE + '/admin/confirm',
    { requestId: id, state },
    config,
  )
}
