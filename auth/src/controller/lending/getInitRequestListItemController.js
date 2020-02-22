import { status400, status200 } from '../../utils/status'
import { getLedingDetail } from '../../service/lending/adminService'
import { isAdmin } from '../../utils/checkrole'
export default async (req, res) => {
  try {
    isAdmin(req.authInfo.role, res)
    const query = await getLedingDetail(req.params.id)
    if (query.status === 200) status200(res, query.data || {})
    status400(res, query.message)
  } catch (e) {
    status400(res)
  }
}
