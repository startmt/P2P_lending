import { status400, status200 } from '../../utils/status'
import { getBorrowerRequestById } from '../../service/lending/borrowerService'
import { getUserIdOnefromRequestId } from '../../crud/requestuser'
import { getUserById } from '../../crud/user'
import { getInfomationByUsername } from '../../crud/information'
export default async (req, res) => {
  try {
    const query = await getBorrowerRequestById(req.params.id)
    const userrequestQuery = await getUserIdOnefromRequestId(query.data.id)
    const user = await getUserById(userrequestQuery.get().userId)
    const information = await getInfomationByUsername(user.get().username)
    const data = {
      user: information.get(),
    }
    Object.assign(data, query.data)
    if (query.status === 200) status200(res, data || {})
    return status400(res, query.message)
  } catch (e) {
    console.log(e)
    return status400(res)
  }
}
