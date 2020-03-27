import { status400, status200 } from '../../utils/status'
import { isAdmin } from '../../utils/checkrole'
import { getLendingRequest } from '../../service/lending/adminService'
export default async (req, res) => {
  try {
    isAdmin(req.authInfo.role, res)
    const query = await getLendingRequest()
    if (query.status === 200) status200(res, query.data || [])
    status400(res, query.message)
  } catch (e) {
    status400(res)
  }
}
