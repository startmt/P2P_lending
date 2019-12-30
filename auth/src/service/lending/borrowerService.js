import { initRequest } from "../../crud/request"
import { getUserByUsername } from '../../crud/user'
export const createLending = async (username, data) => {
  try {
    const query = await getUserByUsername(username)
    if (query.get().identify === true && query.get().role === 'borrower') {
      return await initRequest(data, query.get().id)
    }
    return({status: 400, message: 'you are not borrower or not identify.'})
  } catch (e) {
    return ({ status: 400, message: "error" })
  }

}