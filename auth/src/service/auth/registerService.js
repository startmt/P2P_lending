import {getUserByUsername, createUser} from '../../crud/user'

export const checkExistUser = async (user) => {
  try {
    const data = await getUserByUsername(user.username)
    if (data) {
      return true
    }
    return false
  } catch (e) {
    return false
  }
}

export const create = async (user) => {
  try {
    await createUser(user)
    return ({ status: 200})
  } catch (error) {
    return false
  }
}
