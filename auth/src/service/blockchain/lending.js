import web3 from '../../service/blockchain/web3'
import Lending from '../../contracts/Lending.json'
import config from '../../config'
import { getContractById, savedContractAddressInDB } from '../../crud/contract'
import moment from 'moment'
import { updateRequest } from '../../crud/request'
export const lendingContract = (contractId) => {
  return new web3.eth.Contract(Lending.abi, contractId)
}
export const borrowerLending = async (evidence, requestId) => {
  try {
    const contract = await getContractById(requestId)

    await lendingContract(contract.get().contractDetailId)
      .methods.setEvidenceStamp(evidence, moment().unix() * 1000)
      .send({
        from: config.ACCOUNT_WALLET,
        gasPrice: '10000000000',
        gas: 6721975,
      })

    const state = await lendingContract(contract.get().contractDetailId)
      .methods.getState()
      .call()
    if (state === 'SUCCESS_LENDING') {
      await updateRequest(requestId, { state: 'SUCCESS' })
    }
    return { status: 200, message: 'Pay success' }
  } catch (error) {
    console.log(error)
    return { status: 400, message: 'service error' }
  }
}
export const createLendingContract = async (id, contractData) => {
  const contract = new web3.eth.Contract(Lending.abi)
  const dateList = contractData.contract.map((data) => data.date)
  return contract
    .deploy({
      data: Lending.bytecode,
      arguments: [
        dateList,
        contractData.amount,
        contractData.userContract.borrowerId,
        contractData.userContract.borrowerAddress,
        contractData.userContract.lenderId,
        contractData.userContract.lenderAddress,
      ],
    })
    .send({
      from: config.ACCOUNT_WALLET,
      gasPrice: '10000000000',
      gas: 6721975,
    })
    .on('receipt', async function(receipt) {
      await savedContractAddressInDB(receipt.contractAddress, id)
      console.log(receipt.contractAddress) // contains the new contract address
    })
}
