import axios from 'axios'
import getConfig from 'next/config'
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
