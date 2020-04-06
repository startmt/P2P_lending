import { status400, status200 } from '../../utils/status'
import { getRequestById, lenderAcceptRequest } from '../../crud/request'
import CreateContract from '../../service/transaction/CreateContract'
import { getUserByUsername, getUserById } from '../../crud/user'
import { getUserIdOnefromRequestId } from '../../crud/requestuser'
import { savedContractAddressInDB } from '../../crud/contract'
import { getInfomationByUsername } from '../../crud/information'
import { verifyBank } from '../../crud/bank'
import {
  setLoadingBlockchain,
  deleteLoading,
} from '../../service/blockchain/loading'
import { borrowerLending } from '../../service/blockchain/lending'
import { createLog } from '../../crud/requestlog'
export default async (req, res) => {
  try {
    const data = req.body.data
    const key = req.body.key
    console.log(key)
    switch (key) {
      case 'charge.complete':
        const { username, requestId } = data.metadata
        const user = await getUserByUsername(username)
        if (data.status !== 'successful') status400(res, 'unsuccessful payment')

        const request = await getRequestById(requestId)
        switch (request.get().state) {
          case 'CHECKED':
            const userRequest = await getUserIdOnefromRequestId(requestId)
            const borrowerUser = await getUserById(userRequest.get().userId)
            const lenderInformation = await getInfomationByUsername(username)
            const borrowerInformation = await getInfomationByUsername(
              borrowerUser.get().username,
            )
            const userContract = {
              borrowerId: userRequest.get().userId,
              lenderId: user.get().id,
              borrowerAddress: borrowerInformation.get().blockData,
              lenderAddress: lenderInformation.get().blockData,
            }
            setLoadingBlockchain(username)
            const data = await CreateContract(request.get(), userContract)
            const response = await savedContractAddressInDB(
              data._address,
              requestId,
            )
            await lenderAcceptRequest(user.get().id, requestId)
            await createLog(
              `${username}(lender) has been paid cash. `,
              request.get().id,
            )
            await deleteLoading(username)
            return status200(res, { lendingContract: response })
          case 'LENDING':
            setLoadingBlockchain(username)
            const responseData = await borrowerLending(
              req.body.data.id,
              requestId,
            )
            await deleteLoading(username)
            await createLog(
              `${username}(borrwer) has been paid cash. `,
              request.get().id,
            )
            if (responseData.status === 200) {
              return status200(res, responseData)
            }
            return status400(res, responseData)
          default:
            return status400(res, 'Error')
        }
      case 'recipient.verify':
        if (data.verified !== true) status400(res, 'incomplete verify')
        else if (data.verified === true) {
          const response = await verifyBank(data.id)
          return status200(res, response)
        }
    }
  } catch (e) {
    console.log(e)
    deleteLoading(req.body.data.username)
    return status400(res, 'Error catch')
  }
}
