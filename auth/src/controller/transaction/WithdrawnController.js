import { status400, status200 } from '../../utils/status'
import { withDrawnService } from '../../service/omise/withDrawn'
export default async (req, res) => {
  try {
    let data = null
    const username = req.authInfo.username
    const requestId = req.body.requestId
    const recipient = req.body.transferId
    data = await withDrawnService(username, requestId, recipient)
    if (data.status === 200) return status200(res, data.message)
    return status400(res, data.message  )
  } catch (e) {
    console.log(e)
    status400(res)
  }
}
