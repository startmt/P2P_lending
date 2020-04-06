import { getContractById } from '../../crud/contract'
import { lendingContract } from '../../service/blockchain/lending'
import { getUserByUsername } from '../../crud/user'
import { getRequestById } from '../../crud/request'
import { withdrawnCash } from '../../api/omise'
import config from '../../config'
import { createLog } from '../../crud/requestlog'
export const withDrawnService = async (username, requestId, recipient) => {
  try {
    const user = await getUserByUsername(username)
    const contractInDb = await getContractById(requestId)
    const contract = lendingContract(contractInDb.get().contractDetailId)
    const request = await getRequestById(requestId)
    if (user.get().role === 'borrower') {
      const borrower = await contract.methods.borrower().call()
      if (user.get().id == borrower['id'] && borrower['withdrawn'] == false) {
        const transfer = await withdrawnCash(
          request.get().amount + '00',
          recipient,
        )
        await contract.methods.startLending(transfer.data.id).send({
          from: config.ACCOUNT_WALLET,
          gasPrice: '10000000000',
          gas: 6721975,
        })

        await createLog(
          `${username} has been withdraw amount ${request.get().amount}.`,
          requestId,
        )
        return { status: 200, message: 'transfer successful' }
      }
    } else if (user.get().role === 'lender') {
      const lender = await contract.methods.lender().call()
      const lenderContract = await contract.methods.lenderContract().call()
      if (user.get().id == lender['id'] && lender['withdrawn'] == false) {
        const amount =
          lenderContract['amount'] -
          (lenderContract['amount'] * lenderContract['fee']) / 100
        const transfer = await withdrawnCash(amount, recipient)
        await contract.methods.finishLending(transfer.data.id).send({
          from: config.ACCOUNT_WALLET,
          gasPrice: '10000000000',
          gas: 6721975,
        })
        await createLog(
          `${username} has been withdraw amount ${amount}.`,
          requestId,
        )
        return { status: 200, message: 'transfer successful' }
      }
    }
    return { status: 400, message: `you can't withdrawn` }

    // if(await contract.methods.getBorrowerWithdrawn().call() === false)
  } catch (error) {
    console.log(error)
    return { status: 400, message: 'service catch' }
  }
}
