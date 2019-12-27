
import {
    status400,
    status200,
} from '../../utils/status'
import { getCheckedRequest } from '../../crud/request'
export default async (req, res) => {
    try {
        return status200(res, await getCheckedRequest() || [])
    }
    catch (e) {
        return status400(res)
    }

}
