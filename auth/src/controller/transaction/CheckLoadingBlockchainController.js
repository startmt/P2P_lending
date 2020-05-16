import { status400, status200 } from '../../utils/status'
import { to } from '../../middleware/handleasync'
import { getLoading } from '../../service/blockchain/loading'
export default async (req, res) => {
  try {
    let data
    const username = req.authInfo.username
    data = await to(getLoading(username))
    console.log(data)
    if (data.error) {
      return status200(res, { loading: false })
    }
    return status200(res, { loading: true })
  } catch (error) {
    console.log(error)
  }
}
