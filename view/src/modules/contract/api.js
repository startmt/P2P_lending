import { Lending } from '../../helpers/web3'
import { mapUserToObject } from '../../contract/Lending'
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
