import web3 from '../../service/blockchain/web3'
import Interest from '../../contracts/Interest.json'

const interestContract = (contractId) => {
  return new web3.eth.Contract(Interest.abi, contractId)
}

export default interestContract
