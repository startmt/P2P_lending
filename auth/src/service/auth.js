import { getUserByUsername, updateUser } from '../crud/user'
import { getScbByUsername } from '../crud/scb'
export const checkAuth = async (username) => {
  const user = await getUserByUsername(username)
  const scb = await getScbByUsername(username)
  if (scb) {
    return {
      user: user.get(), scb: true
    }
  } else {
    return { user: user.get(), scb: null }
  }

}
export const validatedUser = async (username) => {
  const query = await getUserByUsername(username)
  const data = { identify: true }
  await updateUser(query.dataValues.userId, data)
}