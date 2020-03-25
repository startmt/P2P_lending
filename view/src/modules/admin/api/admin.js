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

// export const login = (username, password) => {
//   const data = {
//     username,
//     password,
//   }
//   return axios.post(
//     publicRuntimeConfig.AUTH_SERVICE + '/login',
//     data,
//   )
// }

// export const checkAuth = () => {
//   const config = {
//     headers: {
//       Authorization:
//         'Bearer ' + localStorage.getItem('token'),
//     },
//   }
//   return axios.get(
//     publicRuntimeConfig.AUTH_SERVICE + '/',
//     config,
//   )
// }

// export const getUserFromContractApi = (userAddress) => {
//   const contract = new web3.eth.Contract(
//     Manner.abi,
//     userAddress,
//   )
//   // contract.options = {
//   //   address: userAddress,
//   // }
//   return contract.methods.user().call()
// }
