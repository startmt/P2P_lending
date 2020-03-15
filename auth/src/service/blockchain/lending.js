import web3 from '../../service/blockchain/web3'
import Lending from '../../contracts/Lending.json'
export const lendingContract = (contractId) => {
  return new web3.eth.Contract(Lending.abi, contractId)
}
export const createLendingContract = async (contractData) => {
  const contract = new web3.eth.Contract(Lending.abi)
  const dateList = contractData.contract.map((data) => data.date)
  const amountList = contractData.contract.map((data) => data.amount)
  const isPaidList = contractData.contract.map((data) => data.isPaid)
  const evidenceList = contractData.contract.map((data) => data.evidence)
  return await contract
    .deploy({
      data: Lending.bytecode,
      arguments: [
        dateList,
        amountList,
        isPaidList,
        evidenceList,
        contractData.userContract.borrowerId,
        contractData.userContract.lenderId,
      ],
    })
    .send({
      from: '0xFB42998FAc8D89105a058F9a52fEcA5aE1f155c1',
      gasPrice: '1000',
      gas: 6721975,
    })
}
