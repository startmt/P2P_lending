
import {
    status400,
    status200,
} from '../../utils/status'
import { getLenderList } from '../../service/lending/lenderService'
export default async (req, res) => {
    try {
        const query = await getLenderList(req.authInfo.username)
        if (query.status === 200)
            status200(res, query.data || [])
        status400(res, query.message)
    }
    catch (e) {
        return status400(res)
    }

}
