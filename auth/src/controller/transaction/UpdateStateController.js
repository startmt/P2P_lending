import { status400, status200 } from '../../utils/status'
import UpdateState from '../../service/transaction/UpdateState'
export default async (req, res) => {
  try {
    const time = req.body.time
    const response = await UpdateState(time)
    if (response.error) return status400(res)
    return status200(res)
  } catch (e) {
    console.log(e)
    return status400(res, 'Error to create')
  }
}
