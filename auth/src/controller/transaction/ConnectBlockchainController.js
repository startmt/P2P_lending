import { status400, status200 } from '../../utils/status'
import {
  getRequestById,
  updateRequest,
  lenderAcceptRequest,
} from '../../crud/request'
import CreateContract from '../../service/transaction/CreateContract'
import { getUserByUsername } from '../../crud/user'
import { getUserIdOnefromRequestId } from '../../crud/requestuser'
import { savedContractAddressInDB } from '../../crud/contract'
export default async (req, res) => {
  try {
    const data = req.body.data

    const { username, requestId } = data.metadata
    const user = await getUserByUsername(username)
    const request = await getRequestById(requestId)

    switch (data.object) {
      case 'charge':
        if (data.status !== 'successful') status400(res, 'unsuccessful payment')
        switch (request.get().state) {
          case 'CHECKED':
            const userRequest = await getUserIdOnefromRequestId(requestId)
            const userContract = {
              borrowerId: userRequest.get().userId,
              lenderId: user.get().id,
            }
            await lenderAcceptRequest(user.get().id, requestId)
            const data = await CreateContract(request.get(), userContract)
            const response = await savedContractAddressInDB(
              data._address,
              requestId,
            )
            await updateRequest(requestId, { state: 'LENDING' })
            status200(res, { lendingContract: response })
          case 'LENDING':
          default:
            status400(res, 'Error')
        }
      case 'recipient':
        if (data.verified !== true) status400(res, 'incomplete verify')
    }
  } catch (e) {
    console.log(e)
    status400(res, 'Error catch')
  }
}
