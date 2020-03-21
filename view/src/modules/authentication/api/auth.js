import axios from 'axios'
import getConfig from 'next/config'
import web3 from '~/helpers/web3'
import Manner from '~/contract/Manner.json'
const { publicRuntimeConfig } = getConfig()
// const contract = new web3.eth.Contract(
//   Manner.abi,
//   '0xa7bacf6bbb3369c5fa299abd1256fcaca88cbac2',
// )
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

export const getUserFromContractApi = (userAddress) => {
  const contract = new web3.eth.Contract(
    Manner.abi,
    userAddress,
  )
  // contract.options = {
  //   address: userAddress,
  // }
  return contract.methods.user().call()
}
