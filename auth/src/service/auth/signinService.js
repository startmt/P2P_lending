import jwt from 'jsonwebtoken'
import bCrypt from 'bcrypt'
import env from '../../config'
import { getUserByUsername } from '../../crud/user'
import { getAdminDataByUsername } from '../../crud/admin'
export const checkUserFromDb = async (user) => {
  const query = await getUserByUsername(user.username)
  try {
    return await bCrypt.compare(user.password, query.get().password)
  } catch (error) {
    return null
  }
}

export const adminAuthen = async (user) => {
  const query = await getAdminDataByUsername(user.username)
  try {
    console.log(query, user.password)
    return await bCrypt.compare(user.password, query.get().password)
  } catch (error) {
    console.log(error)
    return null
  }
}

export const createSession = async (user) => {
  const payload = {
    username: user.username,
  }
  const expiresTime = {
    expiresIn: '1h',
  }
  const SECRET = env.SECRET_KEY
  const enJwt = jwt.sign(payload, SECRET, expiresTime)
  return enJwt
}
