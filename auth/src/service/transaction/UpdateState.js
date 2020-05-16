import { getLendingRequest, updateRequest } from '../../crud/request'
import { lendingContract } from '../blockchain/lending'
import config from '../../config'
import { createLog } from '../../crud/requestlog'

export default async (time) => {
  try {
    const query = await getLendingRequest()
    const contractList = query.map((data) => {
      return data['contract.contractDetailId']
    })
    for (const contractData in contractList) {
      let contract = await lendingContract(contractList[contractData])
      await contract.methods.setBorrowerScore(Number(time)).send({
        from: config.ACCOUNT_WALLET,
        gasPrice: '10000000000',
        gas: 6721975,
      })
      let state = await contract.methods.state().call()
      console.log(state)
      if (state === 'BORROWER_NOT_ACCEPT' || state === 'REJECTED') {
        const id = await contract.methods.id().call()
        await updateRequest(id, {
          state: 'SUCCESS',
        })
        await createLog('contract has been rejected at state ' + state, id)
      }
    }

    return { status: 200, message: 'complete' }
  } catch (error) {
    console.log(error)
    return { status: 400, message: 'error' }
  }
}
// setBorrowerScore
