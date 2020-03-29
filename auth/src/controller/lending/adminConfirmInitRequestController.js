import { status400, status200 } from '../../utils/status'
import { isAdmin } from '../../utils/checkrole'
import { changeRequestState } from '../../service/lending/lendingService'
import { getUserByUsername } from '../../crud/user'
export default async (req, res) => {
  try {
    isAdmin(req.authInfo.role, res)
    const adminData = await getUserByUsername(req.authInfo.username)
    const requestData = {
      requestId: req.body.requestId,
      state: req.body.state,
      userId: adminData.get().id,
      remark: req.body.remark || ''
    }
    const adminTransaction = await changeRequestState(requestData)
    adminTransaction.status === 200
      ? status200(res)
      : status400(res, adminTransaction.message)
  } catch (error) {
    console.log(error)
    status400(res)
  }
}
