import jwt from 'jsonwebtoken'
import userModel from '../model/user'
import bCrypt from 'bcrypt'
import { getInstance } from '../redis'
import env from '../config'
const redisClient = getInstance()

export const checkUserFromDb = async (user) => {
  const query = await userModel
    .findOne({
      username: user.username,
    })
    .exec()
  try {
    return await bCrypt.compare(
      user.password,
      query.password,
    )
  } catch (error) {
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
  redisClient.set(enJwt, JSON.stringify(payload))
  return enJwt
}
