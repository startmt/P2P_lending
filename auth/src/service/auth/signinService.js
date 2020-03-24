import jwt from 'jsonwebtoken'
import bCrypt from 'bcrypt'
import env from '../../config'
import { getUserByUsername } from '../../crud/user'
export const checkUserFromDb = async (user) => {
  const query = await getUserByUsername(user.username)
  try {
    return await bCrypt.compare(user.password, query.get().password)
  } catch (error) {
    return null
  }
}


export const createSession = async (user, role = 'user') => {
  const payload = {
    username: user.username,
    role,
  }
  const expiresTime = {
    expiresIn: '1h',
  }
  const SECRET = env.SECRET_KEY
  const enJwt = jwt.sign(payload, SECRET, expiresTime)
  return enJwt
}
