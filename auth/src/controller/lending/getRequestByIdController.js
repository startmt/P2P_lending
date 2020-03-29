import { status400, status200 } from '../../utils/status'
import { getLendingRequestById } from '../../service/lending/lenderService'
export default async (req, res) => {
  try {
    console.log('dddd')
    const query = await getLendingRequestById(
      req.authInfo.username,
      req.params.id,
    )
    if (query.status === 200) status200(res, query.data || {})
    status400(res, query.message)
  } catch (e) {
    status400(res)
  }
}
