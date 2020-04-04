import { Lending } from '../../helpers/web3'
import {
  mapUserToObject,
  mapUserDetailToObject,
  mapLendingContractToObject,
} from '../../contract/Lending'
export const getCurrentTenorFromWeb3 = async (address) => {
  const current = await Lending(address)
    .methods.getCurrentTenor()
    .call()
  return Lending(address)
    .methods.contractList(Number(current))
    .call()
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

export const getLender = (address) => {
  return Lending(address)
    .methods.lender()
    .call()
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
