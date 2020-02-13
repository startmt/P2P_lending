import { status400, status200 } from '../../utils/status'
import { getLenderRequestList } from '../../service/lending/lenderService'
export default async (req, res) => {
  try {
    const query = await getLenderRequestList(req.authInfo.username)
    if (query.status === 200) status200(res, query.data || [])
    status400(res, query.message)
  } catch (e) {
    status400(res)
  }
}
