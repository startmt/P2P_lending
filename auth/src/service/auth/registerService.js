import { getUserByUsername, createUser } from '../../crud/user'
import { getUserDatail } from './crudValidatedUser'
import aes256 from 'aes256'
import env from '../../config'
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
    return { status: 200 }
  } catch (error) {
    return false
  }
}

export const createManner = async (username) => {
  queryInformation = await getUserDatail(username)
  const cipher = aes256.createCipher(env.SECRET_KEY)
  return cipher.encrypt(queryInformation.user)
}
