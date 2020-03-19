import web3 from '../../service/blockchain/web3'
import Lending from '../../contracts/Lending.json'
import config from '../../config'
import { getContractById } from '../../crud/contract'
export const lendingContract = (contractId) => {
  return new web3.eth.Contract(Lending.abi, contractId)
}
export const startLending = async (requestId, c) => {
  const contract = await getContractById(requestId)
  const state = await lendingContract(contract.get().contractDetailId)
    .methods.checkOvertimeLending()
    .call()
  if (state === 'WAITING_BORROWER_ACCEPT_MONEY')
    return await lendingContract(contract.get().contractDetailId)
      .methods.startNormalLending()
      .call()
  return state
}
export const createLendingContract = async (contractData) => {
  const contract = new web3.eth.Contract(Lending.abi)
  const dateList = contractData.contract.map((data) => data.date)
  return await contract
    .deploy({
      data: Lending.bytecode,
      arguments: [
        dateList,
        contractData.amount,
        contractData.userContract.borrowerId,
        contractData.userContract.lenderId,
      ],
    })
    .send({
      from: config.ACCOUNT_WALLET,
      gasPrice: '1000',
      gas: 6721975,
    })
}
