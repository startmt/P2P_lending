import {
  getCheckedRequest,
  getCheckedRequestById,
  getRequestByUserList,
} from '../../crud/request'
import { getUserByUsername } from '../../crud/user'
export const getLendingRequest = async (username) => {
  try {
    const query = await getUserByUsername(username)
    if (query.get().role === 'lender') {
      return { status: 200, data: await getCheckedRequest() }
    }
    return { status: 400, message: 'you are not lender' }
  } catch (e) {
    return { status: 400, message: 'error' }
  }
}

export const getLendingRequestById = async (username, id) => {
  try {
    const query = await getUserByUsername(username)
    if (query.get().role === 'lender') {
      return { status: 200, data: await getCheckedRequestById(id) }
    }
    return { status: 400, message: 'you are not lender' }
  } catch (e) {
    return { status: 400, message: 'error' }
  }
}

export const getLenderRequestList = async (username) => {
  try {
    const user = await getUserByUsername(username)
    const query = await getRequestByUserList(user.get().id)
    return { status: 200, data: query }
  } catch (e) {
    return { status: 400, message: 'error' }
  }
}
