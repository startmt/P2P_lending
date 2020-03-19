import { status400, status200 } from '../../utils/status'
import { getRequestById, lenderAcceptRequest } from '../../crud/request'
import CreateContract from '../../service/transaction/CreateContract'
import { getUserByUsername } from '../../crud/user'
import { getUserIdOnefromRequestId } from '../../crud/requestuser'
import { savedContractAddressInDB } from '../../crud/contract'
import { getInfomationByUsername } from '../../crud/information'
import { verifyBank } from '../../crud/bank'
export default async (req, res) => {
  try {
    const data = req.body.data

    const { username, requestId } = data.metadata
    const user = await getUserByUsername(username)
    switch (data.object) {
      case 'charge':
        if (data.status !== 'successful') status400(res, 'unsuccessful payment')

        const request = await getRequestById(requestId)
        switch (request.get().state) {
          case 'CHECKED':
            const userRequest = await getUserIdOnefromRequestId(requestId)
            const borrowerUser = await getUserByUsername(
              userRequest.get().userId,
            )
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
            await lenderAcceptRequest(user.get().id, requestId)
            const data = await CreateContract(request.get(), userContract)
            const response = await savedContractAddressInDB(
              data._address,
              requestId,
            )

            status200(res, { lendingContract: response })
          case 'LENDING':
          default:
            status400(res, 'Error')
        }
      case 'recipient':
        if (data.verified !== true) status400(res, 'incomplete verify')
        else if (data.verified === true) {
          const response = await verifyBank(user.get().id)
          status200(res, response)
        }
    }
  } catch (e) {
    console.log(e)
    status400(res, 'Error catch')
  }
}
