import { status400, status200 } from '../../utils/status'
import { getRequestById, updateRequest } from '../../crud/request'
import CreateContract from '../../service/transaction/CreateContract'
export default async (req, res) => {
  try {
    const data = req.body.data
    if (data.status !== 'successful') status400(res, 'unsuccessful payment')
    const { username, requestId } = data.metadata
    const request = await getRequestById(requestId)
    switch (request.get().state) {
      case 'CHECKED':
        const data = await CreateContract(request.get())
        await updateRequest(requestId, { state: 'LENDING' })
        status200(res, data)
      case 'LENDING':
      default:
        status400(res, 'Error')
    }
  } catch (e) {
    console.log(e)
    status400(res, 'Error to create')
  }
}
