import { status400, status200 } from '../../utils/status'
import { getBorrowerRequestById } from '../../service/lending/borrowerService'
export default async (req, res) => {
  try {
    const query = await getBorrowerRequestById(req.params.id)
    if (query.status === 200) status200(res, query.data || {})
    status400(res, query.message)
  } catch (e) {
    status400(res)
  }
}
