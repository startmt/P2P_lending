import web3 from '../../service/blockchain/web3'
import Manner from '../../contracts/Manner.json'
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
      from: '0x6BCB58C93bfAd484F2A460D5Bc4F901Bc6064af3',
      gasPrice: '6721975',
      gas: 6721975,
    })
}

export default mannerContract
