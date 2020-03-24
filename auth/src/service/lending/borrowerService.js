import { initRequest } from '../../crud/request'
import { getUserByUsername } from '../../crud/user'
import { getRequestById, getRequestByUserList } from '../../crud/request'
export const createLending = async (username, data) => {
  try {
    const query = await getUserByUsername(username)
    if (query.get().identify === true && query.get().role === 'borrower') {
      console.log(data)
      return await initRequest(data, query.get().id)
    }
    return { status: 400, message: 'you are not borrower or not identify.' }
  } catch (e) {
    return { status: 400, message: 'error' }
  }
}

export const getRequestList = async (username) => {
  try {
    const user = await getUserByUsername(username)
    const query = await getRequestByUserList(user.get().id)
    return { status: 200, data: query }
  } catch (e) {
    return { status: 400, message: 'error' }
  }
}

export const getBorrowerRequestById = async (id) => {
  try {
    const query = await getRequestById(id)
    return { status: 200, data: query.get() }
  } catch (e) {
    return { status: 400, message: 'error' }
  }
}
