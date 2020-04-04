import { status400, status200 } from '../../utils/status'
import { getRequestList } from '../../service/lending/borrowerService'
export default async (req, res) => {
  try {
    const query = await getRequestList(req.authInfo.username)
    if (query.status === 200) return status200(res, query.data || [])
    return status400(res, query.message)
  } catch (e) {
    return status400(res)
  }
}
