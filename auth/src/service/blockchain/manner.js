import web3 from '../../service/blockchain/web3'
import Manner from '../../contracts/Manner.json'
import config from '../../config'
export const mannerContract = (contractId) => {
  return new web3.eth.Contract(Manner.abi, contractId)
}

export const createManner = async (data) => {
  const { id, firstname, lastname } = data
  const contract = new web3.eth.Contract(Manner.abi)
  return await contract
    .deploy({
      data: Manner.bytecode,
      arguments: [id, firstname, lastname],
    })
    .send({
      from: config.ACCOUNT_WALLET,
      gasPrice: '10000000000',
      gas: 3000000,
    })
}

export default mannerContract
