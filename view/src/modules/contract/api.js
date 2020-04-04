import { Lending } from '../../helpers/web3'
export const getCurrentTenorFromWeb3 = async (address) => {
  const current = await Lending(address)
    .methods.getCurrentTenor()
    .call()
  return Lending(address)
    .methods.contractList(Number(current))
    .call()
}
