import getConfig from 'next/config'
import { Interest } from '../../../helpers/web3'
const { publicRuntimeConfig } = getConfig()
export const getInterestFromWeb3 = () => {
  return Interest(publicRuntimeConfig.INTEREST_CONTRACT)
    .methods.interest()
    .call()
}

export const setInterestToWeb3 = (interestData) => {
  return Interest(publicRuntimeConfig.INTEREST_CONTRACT)
    .methods.setAllInterest(
      Number(interestData.interest),
      Number(interestData.fee),
    )
    .send({
      from: publicRuntimeConfig.ACCOUNT_WALLET,
      gasPrice: '10000000000',
      gas: 3000000,
    })
}
