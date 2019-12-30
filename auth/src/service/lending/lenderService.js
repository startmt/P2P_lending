import { getCheckedRequest } from "../../crud/request"
import { getUserByUsername } from '../../crud/user'
export const getLendingRequest = async (username) => {
    try {
        const query = await getUserByUsername(username)
        if (query.get().role === 'lender') {
            return { status: 200, data: await getCheckedRequest() }
        }
        return ({ status: 400, message: 'you are not lender' })
    } catch (e) {
        return ({ status: 400, message: "error" })
    }

}