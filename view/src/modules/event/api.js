import axios from 'axios'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const createLendingApi = (data) => {
  const config = {
    headers: {
      Authorization:
        'Bearer ' + localStorage.getItem('token'),
    },
  }
  let form_data = new FormData()
  for (var key in data) {
    form_data.append(key, data[key])
  }

  return axios.post(
    publicRuntimeConfig.LENDING_SERVICE + '/create',
    form_data,
    config,
  )
}
