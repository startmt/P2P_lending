import { status400, status200 } from '../../utils/status'
import { getLog } from '../../crud/requestlog'
export default async (req, res) => {
  try {
    const id = req.params.id
    const data = await getLog(id)
    status200(res, { log: data })
  } catch (e) {
    console.log(e)
    status400(res, 'Error to create')
  }
}
