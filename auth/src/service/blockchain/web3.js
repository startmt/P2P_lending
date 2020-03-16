import Web3 from 'web3'
import config from '../../config'

let web3
const provider = new Web3.providers.HttpProvider(config.BLOCKCHAIN_HOST)

web3 = new Web3(provider)
try {
  web3.eth.accounts.wallet.add('0x' + config.BLOCKCHAIN_PRIVATE)
} catch (error) {}

export default web3
