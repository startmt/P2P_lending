import Web3 from 'web3'
import config from '../../config'

let web3
const provider = new Web3.providers.HttpProvider(config.BLOCKCHAIN_HOST)

web3 = new Web3(provider)
web3.eth.accounts.wallet.add(
  '0x6431F4CA5A8BBEFCA56F89A52748A8616E7DD145FF74E281E7567ED702A84F26',
)
export default web3
