import { Lending } from '../../helpers/web3'
import {
  mapUserToObject,
  mapUserDetailToObject,
  mapLendingContractToObject,
  mapContractListToObject,
} from '../../contract/Lending'
import Axios from 'axios'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
export const getCurrentTenorFromWeb3 = async (address) => {
  const current = await Lending(address)
    .methods.getCurrentTenor()
    .call()
  return Lending(address)
    .methods.contractList(Number(current))
    .call()
}

export const getPayDateList = async (address) => {
  let data = []
  const tenor = await Lending(address)
    .methods.tenor()
    .call()
  for (let i = 0; i < tenor; i++) {
    let currentContract = await Lending(address)
      .methods.contractList(Number(i))
      .call()
    data.push(mapContractListToObject(currentContract))
  }
  return data
}
export const getId = async (address) => {
  return Lending(address)
    .methods.id()
    .call()
}

export const getBorrower = async (address) => {
  const borrower = await Lending(address)
    .methods.borrower()
    .call()
  return mapUserToObject(borrower)
}

export const getState = (address) => {
  return Lending(address)
    .methods.state()
    .call()
}

export const getLender = async (address) => {
  const lender = await Lending(address)
    .methods.lender()
    .call()
  return mapUserToObject(lender)
}

export const getBorrowerDetail = async (address) => {
  const borrower = await Lending(address)
    .methods.getBorrowerDetail()
    .call()
  return mapUserDetailToObject(borrower)
}

export const getLenderDetail = async (address) => {
  const lender = await Lending(address)
    .methods.getLenderDetail()
    .call()
  return mapUserDetailToObject(lender)
}
export const getLenderContract = async (address) => {
  const lender = await Lending(address)
    .methods.lenderContract()
    .call()
  return mapLendingContractToObject(lender)
}

export const getLogApi = async (requestId) => {
  return Axios.get(
    `${publicRuntimeConfig.TRANSACTION_SERVICE}/log/${requestId}`,
  )
}
