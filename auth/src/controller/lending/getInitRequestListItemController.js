import { status400, status200 } from '../../utils/status'
import { getLedingDetail } from '../../service/lending/adminService'
import { isAdmin } from '../../utils/checkrole'
import { getUserIdOnefromRequestId } from '../../crud/requestuser'
import { getInfomationByUsername } from '../../crud/information'
import { getUserById } from '../../crud/user'
export default async (req, res) => {
  try {
    isAdmin(req.authInfo.role, res)
    const query = await getLedingDetail(req.params.id)
    const userrequestQuery = await getUserIdOnefromRequestId(query.data.id)
    const user = await getUserById(userrequestQuery.get().userId)
    const information = await getInfomationByUsername(user.get().username)
    const data = {
      user: information.get(),
    }
    Object.assign(data, query.data.get())

    if (query.status === 200) return status200(res, data || {})
    return status400(res, query.message)
  } catch (e) {
    console.log(e)
    return status400(res)
  }
}
